// The actual implementation of this is based on how your store is structured.
const store = {
    state: {
      cacheLifetime: 5,
      useUrlFragment: false,
      defaultTabHash: null,
      tabs: []
    },
    methods: {
      findTab: (hash: string) => {},
      selectTab: (hash: string) => {},
      findTabByComputedId: (id: string) => {},
    },
  };
  
  export default store;
  