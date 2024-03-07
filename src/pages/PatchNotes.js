import PatchDisplay from "@/components/patchDisplay";
export default function PatchNotes() {
  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-xl w-fit pr-10 border-b-2  border-zinc-800 mb-4">
        Patch Notes
      </h1>
      <PatchDisplay
        version="1.0"
        date="23/04/2023"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        tags={["ruim", "400 mods", "wtf tlg"]}
        author="dj"
        rating="1"
        file="https://drive.google.com/file/d/1h6XcuCtX6siq6LoAqs-PDprM55uB0Kr9/view?usp=share_link"
      />
      <PatchDisplay
        version="1.1"
        date="24/04/2023"
        description="Olha, a diferença desse pro pack anterior apenas Deus pode nos dizer."
        tags={["ainda ruim acredita?"]}
        author="dj"
        rating="1"
        file="https://drive.google.com/file/d/1QU62p8C74N8YGlJxd9EULD69vdlag8-W/view?usp=share_link"
      />
      <PatchDisplay
        version="1.2"
        date="25/04/2023"
        description="Bom aqui a roda começa a girar, eliminamos trocentos mods LIXO, deixamos os ótimos, deve ter ficado uns 40 e pouco no total, o que deixou margem pra colocar de volta 4637294 mods de novo :)"
        tags={["melhorou", "mas da pra ficar melhor", "o inicio do fim"]}
        author="babo"
        rating="3"
        file="https://drive.google.com/file/d/1DNJKi7jz8BwOvAqyA7__d0eMPxpqs6t4/view?usp=sharing"
      />
      <PatchDisplay
        version="a"
        date="25/04/2023"
        description="Fez um patch inteiro pra colocar seila oq"
        tags={["🙄", "clean code no nome desses arquivos"]}
        rating="4"
        author="babo"
      />
      <PatchDisplay
        version="b"
        date="25/04/2023"
        rating="5"
        description="Baixa mais vai baixa"
        tags={["😐", "😤"]}
        author="babo"
      />
      <PatchDisplay
        version="c"
        date="26/04/2023"
        description="Por algum motivo o querido sushi quis se intrometer e colocar mais não sei oq la nesse zip, pra ser sincera aprenderam a compactar mod semana passada e agora estamos todos sofrendo com isso"
        tags={["🔪", "🍣", "🤡"]}
        rating="1"
        author="sushi"
      />
      <PatchDisplay
        version="d"
        date="26/04/2023"
        description="??????"
        tags={["???????????????????????????"]}
        rating="4"
        author="babo"
      />
      <PatchDisplay
        version="f?"
        date="01/05/2023"
        description="esse ficou bom ta"
        tags={["👍", "sinto q não é o fim"]}
        author="babo"
        rating="5"
        file="https://drive.google.com/file/d/1UaWNblINCrhbLoq61V71lqH3AgedAIgE/view?usp=sharing"
      />
      <PatchDisplay
        version="f.2"
        date="06/03/2024"
        description={
          <div>
            <h3 className="text-lg">Mods Adicionados</h3>
            <ul className="list-disc pl-4">
              <li>
                <a
                  className="underline decoration-sky-500"
                  href="https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing"
                  target="_blank"
                >
                  Industrial Foregoing 1.19.2-3.32.3-7{" "}
                </a>
              </li>
              <li>
                <a
                  className="underline decoration-indigo-500"
                  href="https://www.curseforge.com/minecraft/mc-mods/titanium/files"
                  target="_blank"
                >
                  Titanium 1.19.2-3.7.4-30
                </a>
              </li>
            </ul>
          </div>
        }
        tags={[
          "de fato não foi o fim",
          "e la vamos nós",
          "começando do zero 😭😭😭",
          "ideia jo joao ✨",
        ]}
        author="babo"
        rating="1"
        file="https://drive.google.com/file/d/199io4emG6I22DeFopa-k1HYxwArrwY1V/view?usp=sharing"
      />
    </div>
  );
}
