function maskCnae(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","") 
    string=string.replace(/^(\d{2})(\d)/,"$1.$2")
    string=string.replace(/^(\d{2})\.(\d{2})(\d)/,"$1.$2-$3")
    string=string.replace(/^(\d{2})\.(\d{2})[-](\d{1})(\d)/,"$1.$2-$3-$4")
    return string 
}
function maskCep(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")                           
    string=string.replace(/^(\d{5})(\d)/,"$1-$2")
    return string
}
function maskCnpj(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    string=string.replace(/^(\d{2})(\d)/,"$1.$2")
    string=string.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
    string=string.replace(/\.(\d{3})(\d)/,".$1/$2")
    string=string.replace(/(\d{4})(\d)/,"$1-$2")
    return string
}
function maskCpf(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    string=string.replace(/^(\d{3})(\d)/,"$1.$2")
    string=string.replace(/^(\d{3})\.(\d{3})(\d)/,"$1.$2.$3")
    string=string.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/,"$1.$2.$3-$4")
    return string
}
function maskTelefone(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    string=string.replace(/^(\d{2})(\d)/,"($1) $2")
    string=string.replace(/^[(](\d{2})[)][ ](\d{4})(\d)/,"($1) $2-$3")
    return string
}
function maskCelular(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    string=string.replace(/^(\d{2})(\d)/,"($1) $2")
    string=string.replace(/^[(](\d{2})[)][ ](\d{5})(\d)/,"($1) $2-$3")
    return string
}
function isValidCPF(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    if(string.length == 11){
        let first, second
        const calc = ((string[0] * 10) + (string[1] * 9) + (string[2] * 8) + (string[3] * 7) + (string[4] * 6) + (string[5] * 5) + (string[6] * 4) + (string[7] * 3) + (string[8] * 2))%11
        if(calc >1) first = 11 - calc
        else first = 0
        const calc2 = ((string[0] * 11) + (string[1] * 10) + (string[2] * 9) + (string[3] * 8) + (string[4] * 7) + (string[5] * 6) + (string[6] * 5) + (string[7] * 4) + (string[8] * 3) + (first * 2))%11
        if(calc2 >1) second = 11 - calc2
        else second = 0
        if(string[9] == first && string[10] == second) return true
        else return false
    }else return false
}
function isValidCNPJ(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    if(string.length == 14){
        let first, second
        const calc = ((string[0] * 5) + (string[1] * 4) + (string[2] * 3) + (string[3] * 2) + (string[4] * 9) + (string[5] * 8) + (string[6] * 7) + (string[7] * 6) + (string[8] * 5) + (string[9] * 4) + (string[10] * 3) + (string[11] * 2))%11
        if(calc >1) first = 11 - calc
        else first = 0
        const calc2 = ((string[0] * 6) + (string[1] * 5) + (string[2] * 4) + (string[3] * 3) + (string[4] * 2) + (string[5] * 9) + (string[6] * 8) + (string[7] * 7) + (string[8] * 6) + (string[9] * 5) + (string[10] * 4) + (string[11] * 3) + (first * 2))%11
        if(calc2 >1) second = 11 - calc2
        else second = 0
        if(string[12] == first && string[13] == second) return true
        else return false
    }else return false
}
function whichUfCPF(string){
    string=string.replace(/\D/g,"")
    string=string.replace("(\b[0-9]\b)/g","")
    if(string.length == 11){
        let first, second
        const calc = ((string[0] * 10) + (string[1] * 9) + (string[2] * 8) + (string[3] * 7) + (string[4] * 6) + (string[5] * 5) + (string[6] * 4) + (string[7] * 3) + (string[8] * 2))%11
        if(calc >1) first = 11 - calc
        else first = 0
        const calc2 = ((string[0] * 11) + (string[1] * 10) + (string[2] * 9) + (string[3] * 8) + (string[4] * 7) + (string[5] * 6) + (string[6] * 5) + (string[7] * 4) + (string[8] * 3) + (first * 2))%11
        if(calc2 >1) second = 11 - calc2
        else second = 0
        if(string[9] == first && string[10] == second) {
            switch(Number(string[8])){
                case 0:
                    return {valid: true, uf: ["Rio Grande do Sul"]}
                case 1:
                    return {valid: true, uf: ["Distrito Federal","Goiás","Mato Grosso","Mato Grosso do Sul","Tocantins"]}
                case 2:
                    return {valid: true, uf: ["Amazonas","Pará","Roraima","Amapá","Acre","Rondônia"]}
                case 3:
                    return {valid: true, uf: ["Ceará","Maranhão","Piauí"]}
                case 4:
                    return {valid: true, uf: ["Paraíba", "Pernambuco","Alagoas","Rio Grande do Norte"]}
                case 5:
                    return {valid: true, uf: ["Bahia","Sergipe"]}
                case 6:
                    return {valid: true, uf: ["Minas Gerais"]}
                case 7:
                    return {valid: true, uf: ["Rio de Janeiro","Espírito Santo"]}
                case 8:
                    return {valid: true, uf: ["São Paulo"]}
                case 9:
                    return {valid: true, uf: ["Paraná","Santa Catarina"]}                    
            }
        }
        else return {valid: false}
    }else return {valid: false}
}
function convertBase64(file){
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
module.exports = {maskCnae,maskCep,maskCnpj,maskCpf,maskTelefone,maskCelular,isValidCPF,isValidCNPJ,whichUfCPF,convertBase64}