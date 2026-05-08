var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var input = document.getElementById("busqueda");
var boton = document.getElementById("btnBuscar");
var cargando = document.getElementById("cargando");
var resultados = document.getElementById("resultados");
var mensaje = document.getElementById("mensaje");
boton.addEventListener("click", buscarLibros);
function buscarLibros() {
    return __awaiter(this, void 0, void 0, function () {
        var texto, cargando, response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    texto = input.value.trim();
                    cargando = document.getElementById("cargando");
                    resultados.innerHTML = "";
                    mensaje.textContent = "";
                    if (texto === "") {
                        mensaje.textContent = "Debe ingresar un término de búsqueda";
                        return [2 /*return*/];
                    }
                    cargando.style.display = "block";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("https://openlibrary.org/search.json?q=".concat(encodeURIComponent(texto)))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    mostrarResultados(data.docs.slice(0, 10));
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    mensaje.textContent = "Error al buscar libros.";
                    return [3 /*break*/, 6];
                case 5:
                    if (cargando) {
                        cargando.style.display = "none";
                    }
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function mostrarResultados(libros) {
    resultados.innerHTML = "";
    libros.forEach(function (libro) {
        var autor = libro.author_name
            ? libro.author_name[0]
            : "Autor desconocido";
        var anio = libro.first_publish_year
            ? libro.first_publish_year
            : "Sin año";
        resultados.innerHTML += "\n            <div class=\"card\">\n                <h3>".concat(libro.title, "</h3>\n                <p><strong>Autor:</strong> ").concat(autor, "</p>\n                <p><strong>A\u00F1o:</strong> ").concat(anio, "</p>\n            </div>\n        ");
    });
}
