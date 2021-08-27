import React from "react";

interface generationSprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  animated?: generationSprites;
}

interface dateToReturn {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: false;
    slot: number;
  }[];
  base_experience: number;
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: 172;
    version: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  name: string;
  order: number;
  past_types?: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other?: {
      dream_world?: {
        front_default?: string;
        front_female?: string;
      };
      "official-artwork"?: {
        front_default: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": generationSprites;
        yellow: generationSprites;
      };
      "generation-ii": {
        crystal: generationSprites;
        gold: generationSprites;
        silver: generationSprites;
      };
      "generation-iii": {
        emerald: generationSprites;
        "firered-leafgreen": generationSprites;
        "ruby-sapphire": generationSprites;
      };
      "generation-iv": {
        "diamond-pearl": generationSprites;
        "heartgold-soulsilver": generationSprites;
        platinum: generationSprites;
      };
      "generation-v": {
        "black-white": generationSprites;
      };
      "generation-vi": {
        "omegaruby-alphasapphire": generationSprites;
        "x-y": generationSprites;
      };
      "generation-vii": {
        icons: generationSprites;
        "ultra-sun-ultra-moon": generationSprites;
      };
      "generation-viii": generationSprites;
    };
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}

const SearchDataContext = React.createContext<null | dateToReturn>(null);

export { SearchDataContext };
