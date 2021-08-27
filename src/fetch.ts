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

interface pokemonSpeciesInt {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: boolean;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: {
    name: string;
    url: string;
  };
  pokedex_numbers: {
    entry_number: number;
    pokedex: {
      name: string;
      url: string;
    };
  }[];
  egg_groups: {
    name: string;
    url: string;
  }[];
  color: {
    name: string;
    url: string;
  };
  shape: {
    name: string;
    url: string;
  };
  evolves_from_species: {
    name: string;
    url: string;
  };
  evolution_chain: {
    url: string;
  };
  habitat?: null | string;
  generation: {
    name: string;
    url: string;
  };
  names: {
    name: string;
    language: {
      name: string;
      url: string;
    };
  }[];
}

interface evolDetailsInt {
  gender: null | number;
  held_item: null | string;
  item: null | { name: string; url: string };
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null | number;
  min_beauty: null | number;
  min_happiness: null | number;
  min_level: null | number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null | number;
  time_of_day: string;
  trade_species: null;
  trigger: {
    name: string;
    url: string;
  };
  turn_upside_down: boolean;
}
[];

interface speciesInt {
  name: string;
  url: string;
}

interface evolutionInt {
  evolution_details: evolDetailsInt[] | never[];
  evolves_to: evolutionInt[];
  is_baby: boolean;
  species: speciesInt;
}
[];

const fetchData = async (url: string) => {
  try {
    const request = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: dateToReturn | pokemonSpeciesInt | evolutionInt =
      await request.json();
    if (request.ok === true) {
      console.log("Succesfully got data");
      return data;
    }
  } catch (err) {
    console.error(err);
  }
};

export { fetchData };
