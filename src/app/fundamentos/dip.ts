import corrida from "@/core/fundamentos/corrida";
import Terminalutil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Ferrari from "@/core/fundamentos/Ferrari";
import Carro from "@/core/fundamentos/Carro";
import { terminal } from "terminal-kit";

export default async function dip() {
    Terminalutil.titulo('DIP');

    const [tipoCarro] = await Terminalutil.selecao("Tipo de carro?", ["Ferrari", "Fusca"]);
    const carro: Carro = tipoCarro === 0 ? new Ferrari : new Fusca;
    
    corrida(carro, terminal.yellow);
    
    await Terminalutil.esperarEnter();
}