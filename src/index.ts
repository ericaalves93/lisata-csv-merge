import fs from 'fs'

(async () => {

    const absolutePath = __dirname;
    const caminho = `${absolutePath}/../Relatorios`

    const allFolders = fs.readdirSync(caminho);

    function pastaToCSV(pathPasta) {

        let arquivos = fs.readdirSync(pathPasta)

        function lerArquivo(nome) {
            let caminhoDoArquivo = `${pathPasta}/${nome}`
            return fs.readFileSync(caminhoDoArquivo, 'latin1' )
        }

        let conteudos = arquivos.map(lerArquivo)

        function removerCabecalho(conteudoCsv) {
            let linhas = conteudoCsv.split('\n')
            return linhas.splice(1).join('\n')
        }

        const conteudosSemCabecalho = conteudos.map(removerCabecalho)
        const cabecalho = conteudos[0].split('\n')[0]
        const resultado = cabecalho + '\n' + conteudosSemCabecalho.join('\n')
        
        return resultado
    }


    for(let folderName of allFolders) {
        const filePath = `${caminho}/${folderName}`
        const conteudoCsvGigante = pastaToCSV(filePath)
        const novocaminho = `${absolutePath}/../Planilhas/Relatorios/Relatorios/${folderName}`

        fs.mkdirSync(`${novocaminho}`);

        const output = (folderName == 'Participantes' ? 'Total_Participantes' : `Questionario_${folderName}`)
        fs.writeFileSync(`${novocaminho}/${output}.csv`, conteudoCsvGigante)
    }

})();
