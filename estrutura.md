# Explicação da Estrutura

```
    📦JA-Drywall
    ┣ 📂src
    ┃ ┣ 📂assets
    ┃ ┃ ┣ 📂images
    ┃ ┃ ┃ ┣ 📜arrow.svg
    ┃ ┃ ┃ ┣ 📜BenefitsImage0.webp
    ┃ ┃ ┃ ┣ 📜BenefitsImage1.webp
    ┃ ┃ ┃ ┣ 📜BenefitsImage2.webp
    ┃ ┃ ┃ ┣ 📜BenefitsImage3.webp
    ┃ ┃ ┃ ┣ 📜BenefitsImage4.webp
    ┃ ┃ ┃ ┣ 📜BenefitsImage5.webp
    ┃ ┃ ┃ ┣ 📜capa.webp
    ┃ ┃ ┃ ┣ 📜EMail.svg
    ┃ ┃ ┃ ┣ 📜favicon.ico
    ┃ ┃ ┃ ┣ 📜Instagram.svg
    ┃ ┃ ┃ ┣ 📜logoja.webp
    ┃ ┃ ┃ ┣ 📜print.png
    ┃ ┃ ┃ ┣ 📜TestimonialsAvatar0.webp
    ┃ ┃ ┃ ┣ 📜TestimonialsAvatar1.webp
    ┃ ┃ ┃ ┣ 📜TestimonialsAvatar2.webp
    ┃ ┃ ┃ ┣ 📜TestimonialsAvatar3.webp
    ┃ ┃ ┃ ┗ 📜WhatsappIcon.svg
    ┃ ┃ ┗ 📂styles
    ┃ ┃ ┃ ┣ 📂base
    ┃ ┃ ┃ ┃ ┣ 📜_reset.css
    ┃ ┃ ┃ ┃ ┗ 📜_typography.css
    ┃ ┃ ┃ ┣ 📂components
    ┃ ┃ ┃ ┃ ┣ 📜_buttons.css
    ┃ ┃ ┃ ┃ ┣ 📜_carousel.css
    ┃ ┃ ┃ ┃ ┣ 📜_details.css
    ┃ ┃ ┃ ┃ ┣ 📜_loader.css
    ┃ ┃ ┃ ┃ ┗ 📜_testimonials.css
    ┃ ┃ ┃ ┣ 📂layout
    ┃ ┃ ┃ ┃ ┣ 📜layout_footer.css
    ┃ ┃ ┃ ┃ ┣ 📜layout_header.css
    ┃ ┃ ┃ ┃ ┣ 📜layout_main.css
    ┃ ┃ ┃ ┃ ┗ 📜layout_page.css
    ┃ ┃ ┃ ┣ 📂utils
    ┃ ┃ ┃ ┃ ┣ 📜utils_animations.css
    ┃ ┃ ┃ ┃ ┣ 📜utils_helpers.css
    ┃ ┃ ┃ ┃ ┗ 📜utils_variables.css
    ┃ ┃ ┃ ┗ 📜main.css
    ┃ ┣ 📂components
    ┃ ┃ ┣ 📜button.js
    ┃ ┃ ┣ 📜clientTestimonials.js
    ┃ ┃ ┣ 📜details.js
    ┃ ┃ ┗ 📜featuresBenefits.js
    ┃ ┣ 📂data
    ┃ ┃ ┗ 📜drywall.json
    ┃ ┣ 📂layout
    ┃ ┃ ┣ 📜footer.js
    ┃ ┃ ┗ 📜header.js
    ┃ ┣ 📂pages
    ┃ ┃ ┗ 📜home.js
    ┃ ┣ 📂services
    ┃ ┃ ┣ 📜authService.js
    ┃ ┃ ┗ 📜handleButtonClick.js
    ┃ ┣ 📂utils
    ┃ ┃ ┣ 📜helpers.js
    ┃ ┃ ┗ 📜renderElement.js
    ┃ ┗ 📜main.js
    ┣ 📜.gitattributes
    ┣ 📜.gitignore
    ┣ 📜estrutura.md
    ┣ 📜generateMetaTag.cjs
    ┣ 📜index.html
    ┣ 📜LICENSE.txt
    ┣ 📜package-lock.json
    ┣ 📜package.json
    ┣ 📜README.md
    ┗ 📜vite.config.js
```

| pasta/arquivo | conteúdo |
|:---:|:---|
| components/ | Contém componentes reutilizáveis que podem ser usados em várias partes da aplicação. |
| layout/ | Contém componentes relacionados ao layout, como navegação, cabeçalhos, rodapés, etc. |
| pages/ | Contém scripts específicos de páginas, representando as diferentes páginas da aplicação. |
| services/ | Contém serviços para lidar com lógica de negócios, como chamadas de API e autenticação. |
| utils/ | Contém funções utilitárias, constantes e validadores que podem ser usados em toda a aplicação. |
| assets/ | Contém recursos estáticos como imagens, estilos e fontes. |
| index.html | O ponto de entrada principal da aplicação. |
| main.js | O arquivo JavaScript principal que importa e inicializa os módulos necessários. |

```
|– JA-Drywall/
|
| |– src/
| |
| |– assets/
| |   |– images/           # Imagens
| |   |– styles/           # Estilos (CSS/SASS)
| |   |– fonts/            # Fontes
| |
| |– components/
| |   |– button.js         # Componente de botão
| |   |– carousel.js       # Componente de carrossel
| |   |– dropdown.js       # Componente de dropdown
| |   ...                  # Outros componentes
| |
| |– layout/
| |   |– navigation.js     # Navegação
| |   |– grid.js           # Sistema de grid
| |   |– header.js         # Cabeçalho
| |   |– footer.js         # Rodapé
| |   |– sidebar.js        # Barra lateral
| |   |– form.js           # Formulários
| |   ...                  # Outros componentes de layout
| |
| |– pages/
| |   |– home.js           # Página inicial
| |   |– contact.js        # Página de contato
| |   ...                  # Outras páginas
| |
| |– services/
| |   |– apiService.js     # Serviço de API
| |   |– authService.js    # Serviço de autenticação
| |   ...                  # Outros serviços
| |
| |– utils/
| |   |– constants.js      # Constantes
| |   |– helpers.js        # Funções auxiliares
| |   |– validators.js     # Funções de validação
| |   ...                  # Outros utilitários
| |
| |– main.js               # Arquivo HTML principal
|
|– index.html              # Arquivo JS principal
```

## Estrutura da pasta styles

| pasta/arquivo | conteúdo |
|:---:|:---|
| Base | A pasta base/ contém estilos básicos e padrões para o projeto. Aqui você pode encontrar um arquivo _reset.css e possivelmente uma folha de estilo como _base.css, que cuida de estilos para toda a aplicação.|
|Layout| Na pasta layout/ estão os estilos para o layout da aplicação. Isso inclui folhas de estilo padrão como _header.css, _footer.css, _sidebar.css, bem como estilos relacionados ao layout, como grades e contêineres.|
|Components|A pasta components/ é dedicada aos componentes que podem ser reutilizados nas páginas. Exemplos de componentes incluem buttons.css, modals.css, cards.css. É importante notar a diferença entre Components e Layout. Enquanto o Layout trata dos layouts globais da página, a pasta Components lida com componentes menores e reutilizáveis.|
|Pages|A pasta pages/ contém estilos específicos para páginas individuais. Por exemplo, você pode encontrar um arquivo de estilo como _home.css ou _login.css|
|Themes|Para aplicações maiores que requerem suporte a vários temas, a estrutura reserva uma pasta para esses temas. Aqui você pode incluir estilos para diferentes temas utilizados na aplicação.|
|Abstract|A pasta abstract/ lida com todas as ferramentas e utilitários do SASS que podem ser utilizados em todo o projeto. Isso inclui arquivos como _variables.css, _mixins.css, _functions.css, entre outros.|
|Vendors|Na pasta vendors/ estão contidos conteúdos externos, como CSS de bibliotecas ou frameworks externos, por exemplo, Normalize, Bootstrap, JQueryUI, etc. Os arquivos de inclusão desses estilos podem ser nomeados como _normalize.css, _bootstrap.css, etc.|
|main.css|O ficheiro principal (normalmente chamado de main.css) também sendo o único ficheiro que não possui underscore.|

No main.css não deve conter nada além de imports de outros ficheiros — Isto pois, é importante preservarmos a legibilidade no ficheiro principal.

#### Para preservar a legibilidade, o arquivo principal deve respeitar estas diretrizes:

- Um arquivo por @import;
- Um @import por linha;
- Sem nova linha entre dois @imports da mesma pasta;
- Uma nova linha após o último @import de uma pasta;

```
styles/
|
|– base/
|   |– _reset.css       # Reset/normalização
|   |– _typography.css  # Regras de tipografia
|   ...                 # Etc...
|
|– components/
|   |– _buttons.css     # Botões
|   |– _carousel.css    # Carrossel
|   |– _dropdown.css    # Dropdown
|   ...                 # Etc...
|
|– layout/
|   |– _navigation.css  # Navegação
|   |– _grid.css        # Sistema de grid
|   |– _header.css      # Cabeçalho
|   |– _footer.css      # Rodapé
|   |– _sidebar.css     # Barra lateral
|   |– _forms.css       # Formulários
|   ...                 # Etc...
|
|– pages/
|   |– _home.css        # Estilos Página inicial
|   |– _contact.css     # Estilos Página de contato
|   ...                 # Etc...
|
|– themes/
|   |– _theme.css       # Tema padrão
|   |– _admin.css       # Tema de administração
|   ...                 # Etc...
|
|– utils/
|   |– _variables.css   # Variáveis css
|   |– _functions.css   # Funções css
|   |– _mixins.css      # Mixins css
|   |– _helpers.css     # Auxiliares de classes
|
|– vendors/
|   |– _bootstrap.css   # Bootstrap
|   |– _jquery-ui.css   # jQuery UI
|   ...                 # Etc...
|
|– main.css             # Arquivo principal do css
```