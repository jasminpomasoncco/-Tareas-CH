class Usuario{
    
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=[]
        this.mascotas=[]
    }

    getFullName(){
        return `${this.nombre}  ${this.apellido}`
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(nombre,autor){
        this.libros.push({
            nombre: nombre, 
            autor:autor
        })
    }
    
    getBookNames(){
        const nombres = []
        for (let i = 0; i < this.libros.length; i++) {
            nombres.push('Nombre : ' +  this.libros[i].nombre + '- Autor: ' + this.libros[i].autor)
        }
        return nombres
    }

}

const u1=new Usuario("Jasmin", "Pomasoncco")
u1.addMascota('Linda')
u1.addMascota('Lala')

//console.log(u1.getFullName())

//console.log(u1.countMascotas())

//u1.addBook('El diario de Anna Frank','Anna Frank')

//console.log(u1.getBookNames())