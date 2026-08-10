const components = [
    "header",
    "hero",
    "empresa",
    "merenda",
    "pesquisa",
    "impacto",
    "equipe",
    "download",
    "contato",
    "footer"
];


async function carregarComponentes() {

    for (const component of components) {

        const container =
            document.getElementById(component);

        if (!container) continue;


        try {

            const resposta =
                await fetch(`components/${component}.html`);

            if (!resposta.ok) {

                throw new Error(
                    `Erro ao carregar ${component}.html`
                );

            }


            const html = await resposta.text();

            container.innerHTML = html;

        } catch (erro) {

            console.error(erro);

        }

    }

}


carregarComponentes();