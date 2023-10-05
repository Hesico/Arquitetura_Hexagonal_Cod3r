import Terminalutil from "@/app/util/TerminalUtil";
import registrarUsuario from "../usuario/registrarUsuário";

export default async function menuUsuario() {
    Terminalutil.titulo("Fundamentos");

    const [indice] = await Terminalutil.menu(["1. Registrar usuário", "Voltar"]);

    switch (indice) {
        case 0:
            await registrarUsuario();
            break;
        default:
            return;
    }

    menuUsuario();
}
