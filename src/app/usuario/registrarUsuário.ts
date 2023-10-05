import Terminalutil from "../util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioEmMemoria from "@/adapter/db/RepositorioUsuarioEmMemoria";

export default async function registrarUsuario() {
    Terminalutil.limpar();
    Terminalutil.titulo("Registrar Usuario");

    const nome = await Terminalutil.campoRequerido("Nome: ", "Ana da Silva");
    const email = await Terminalutil.campoRequerido("E-mail: ", "ana@silva.com");
    const senha = await Terminalutil.campoRequerido("Senha: ", "123456");

    const usuario: Usuario = {nome, email, senha};

    const repositorio = new RepositorioUsuarioEmMemoria();
    const provedorCripto = new SenhaCripto();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

    try {
        await casoDeUso.executar(usuario);
        Terminalutil.sucesso("Usuário registrado com sucesso!");
    } catch (e: any) {
        Terminalutil.erro(e.message)
    } finally {
        await Terminalutil.esperarEnter();
    }

}
