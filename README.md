### Pesquisa

## Como é feito o commonMain? (código  compartilhado, sem dependências)
### Flutter
- Usa `dart` como uma linguagem única
- O Código `dart` roda numa máquina virtual, a `Dart VM`
- O Código inteiro, roda sem dependências, graças ao seu isolamento do sistema operacional

### React
- Usa `Javascript/Typescript` como uma linguagem única
- O código roda numa engine, o `Hermes`, por padrão


## Como o framework fala com o Target?
### Flutter
O Dart, quando quer chamar uma função nativa, ele utiliza o `Method Channel`
Ele é uma camada intermediária, que chama uma função que está no Android ou IOS, espera a chamada e continua.
- Dart -> envia mensagem -> MethodChannel -> Código nativo
- Código nativo -> MethodChannel -> Recebe resposta -> Dart

### React native
Já o React native, utiliza o `Bridge`, ou o mais novo`JSI`, que chama as APIS nativas do android
- O React native, disponibiliza APIS nativas atravéz dos `NativeModules`
- No nosso exemplo utilizamos o `Platform.OS`
- Esses `NativeModules`, traduzem a instrução para uma chamada para o `Bridge\JSI` 

## Como criar um aplicativo multiplataforma com React Native

### Instalação
- Usar toolbox do Rider, disponível em: https://www.jetbrains.com/toolbox-app/
- Baixar o Android Studio.
- Utilizamos um celular físico para debug
- Usando  comando `npx create-expo-app@latest`, criamos uma aplicação inicial
- Após a instalação, abrimos a pasta criada no `vscode`
- Utilizamos o comando `npm start`, para rodar a aplicação inicial
- Na play store, instalamos o aplicativo `expo go`
- No aplicativo, inserimos o endereço mostrado no console, no nosso caso: `exp://192.168.0.120:8081` (o IP pode mudar).

### Criação do Hello World
- Dentro do arquivo `_layout.tsx`, trocamos o conteúdo para apresentar um `Hello World`
- Utilizamos próprios componentes disponibilizados pelo template do expo
- Na função `RootLayout`, dentro do componente `ThemeProvider`, adicionamos uma `ThemedView`
    - Esse componente, ajuda a apresentar um background que depende do tema do usuário
    - Utilizamos a propriedade `style`, para fazer com que a view ocupasse toda a tela
- Usando um `ThemedText`, apresentamos a mensagem de `Hello World!`
    - Novamente, esse componente, respeita o tema do telefone do usuário
- Abaixo do `ThemedText`, adicionamos um `Button`
    - Na propriedade `title`, adicionamos o título `Aperte aqui`
    - Na propridade `onPress`, passamos um callback, que utiliza o built in `alert`, onde passamos como parametro, a nossa saudação
    - Utilizamos o utilitário `Platform.OS`, para mostrar uma mensagem customizada dependendo do sistema operacional do usuário



