class LaunchService {
  async getNext() {
    try {
      //TODO: Chamar API SpaceX para listar todos próximos os lançamentos
      return await { title: "exibindo o proximo lançamento" };
    } catch (err) {
      throw new Error(err);
    }
  };

  async getNextList() {
    try {
      //TODO: Chamar API SpaceX para listar todos próximos os lançamentos
      return await [{ title: "listando os proximos lançamentos" }];
    } catch (err) {
      throw new Error(err);
    }
  };

  async getPrevious() {
    try {
      //TODO: Chamar API SpaceX para listar todos próximos os lançamentos
      return await { title: "exibindo ultimo lançamento" };
    } catch (err) {
      throw new Error(err);
    }
  };

  async getPreviousList() {
    try {
      //TODO: Chamar API SpaceX para listar todos próximos os lançamentos
      return await [{ title: "listando os lançamentos passados" }];
    } catch (err) {
      throw new Error(err);
    }
  };
};

module.exports = LaunchService;