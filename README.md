## Combinar CSV 

### Ponto de atenção: É necessário instalar a última versão do nodejs para executar este script. Você pode encontrá-lo para a sua plataforma aqui neste [website](https://nodejs.org)

#### Etapa 1

- Acesse o website: ead.jornadadacidadania.com.br
- No topo direito da tela clique em **Aluno** e depois em Administrador
- Na lista, expanda os itens que iniciam com **Jornada da Cidadania |**

##### Para exportar participantes
- Em cada item expandido, clique em **Inscrição**
- Na tela que foi aberta clique em **Exportar**
- Salve o arquivo localmente

##### Para exportar pesquisas com os alunos
- Em cada item expandido, clique em **Alunos**
- Na tela que foi aberta clique em **Exportar**
- No modal que será aberto todos os itens que terminam com **| Pesquisa** devem ser baixados, é importante ressaltar que os itens devem ser baixados um a um
- Salve os arquivos localmente


#### Etapa 2

- Os arquivos que são respectivos a participantes (geralmente iniciados com o padrão Participantes-${Estado}.csv) devem ser movidos para o diretório **Relatorios/Participantes**
- Os arquivos que são respectivos as aulas, devem ser movidos para o diretório **Relatorios/Aula${numero_da_aula}**

#### Etapa 3

- Com o diretório **Relatorios** estruturado é hora de rodar o script para combinar o CSV
- Abra o terminal na raiz do projeto e execute o comando: 

`````
$ npm start
`````

#### Etapa 4

- O comando que foi executado na etapa 3 gerou o output dos relatórios no diretório **Planilhas/Relatorios/Relatorios/**
- No google drive, importe os arquivos csv que foram gerados e gere as planilhas em formato excel