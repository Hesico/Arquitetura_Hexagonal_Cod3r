import Terminalutil from "../util/TerminalUtil";
import Usuario from "@/core/usuario/model/Usuario";
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario";
import SenhaCripto from "@/adapter/auth/SenhaCripto";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPG";

export default async function registrarUsuario() {
    const {limpar, titulo, campoRequerido, sucesso, erro, esperarEnter} = Terminalutil;

    limpar();
    titulo("Registrar Usuario");

    const nome = await campoRequerido("Nome: ", "Ana da Silva");
    const email = await campoRequerido("E-mail: ", "ana@silva.com");
    const senha = await campoRequerido("Senha: ", "123456");

    const usuario: Usuario = {nome, email, senha};

    const repositorio = new RepositorioUsuarioPg();
    const provedorCripto = new SenhaCripto();
    const casoDeUso = new RegistrarUsuario(repositorio, provedorCripto);

    try {
        await casoDeUso.executar(usuario);
        sucesso("Usuário registrado com sucesso!");
    } catch (e: any) {
        erro(e.message)
    } finally {
        await esperarEnter();
    }

}
