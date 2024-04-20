export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typescript','blue');
    static readonly PYTHON = new Tag('Python','green');
    static readonly DJANGO = new Tag('Django','green');
    static readonly JAVA = new Tag('Java','brown');
    static readonly SPRING = new Tag('Spring','brown');
    static readonly CSHARP = new Tag('C#','orange');
    static readonly DOTNET = new Tag('.Net','orange');
    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}