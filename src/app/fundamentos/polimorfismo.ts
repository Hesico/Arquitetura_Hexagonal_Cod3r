import Ferrari from "@/core/fundamentos/Ferrari";
import Terminalutil from "../util/TerminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import Carro from "@/core/fundamentos/Carro";

export default async function polimorfismo() {
    Terminalutil.limpar();
    Terminalutil.titulo("Polimorfismo");

    const [tipoCarro] = await Terminalutil.selecao("Tipo de carro?", ["Ferrari", "Fusca"]);
    const carro: Carro = tipoCarro === 0 ? new Ferrari : new Fusca;

    while (true) {
        Terminalutil.limpar();
        Terminalutil.exibirChaveValor('Velocidade Máxima: ', `${carro.velocidadeMaxima} Km/h`);
        Terminalutil.exibirChaveValor('Velocidade Atual: ', `${carro.velocidadeAtual} Km/h`);

        const [opcao] = await Terminalutil.selecao("Qual opção?", ["Acelerar", "Frear"]);

        opcao === 0 ? carro.acelerar() : carro.frear();

        const continuar = await Terminalutil.confirmacao("Deseja Continuar");
        if (!continuar) return;
    }
}
