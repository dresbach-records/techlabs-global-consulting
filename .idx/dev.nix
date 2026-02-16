
{ pkgs, ... }: {
  # Canal Nix para garantir pacotes consistentes e estáveis.
  channel = "stable-23.11";

  # Define os pacotes do sistema a serem instalados no ambiente.
  packages = [
    # Disponibiliza o Node.js v20 e o npm.
    pkgs.nodejs_20
  ];

  # Configura as prévias de aplicativos dentro do Firebase Studio.
  idx.previews = {
    # Ativa o sistema de prévias.
    enable = true;
    previews = {
      # Define uma prévia chamada "web".
      web = {
        # O comando para iniciar o servidor de desenvolvimento.
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        # Gerenciador para a prévia (geralmente "web" para servidores web).
        manager = "web";
      };
    };
  };

  # Opcional: Instala as dependências do npm automaticamente se a pasta node_modules não existir.
  # Esta é uma maneira de simular o 'shellHook' que eu estava tentando usar antes.
  # No IDX, isso pode ser feito de forma mais elegante com as ferramentas do próprio IDX,
  # mas um script de inicialização pode ser uma alternativa.
  # Por enquanto, vamos manter simples e focar em ter o 'npm run dev' funcionando.
}
