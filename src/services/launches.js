const connector = require("./connector");

class LaunchService {
  async getNext() {
    try {
      return await connector.callFetch("https://api.spacexdata.com/v5/launches/next");
    } catch (err) {
      throw new Error(err);
    }
  };

  async getNextList() {
    try {
      return await connector.callFetch("https://api.spacexdata.com/v5/launches/upcoming");
    } catch (err) {
      throw new Error(err);
    }
  };

  async getPrevious() {
    try {
      return await connector.callFetch("https://api.spacexdata.com/v5/launches/latest");
    } catch (err) {
      throw new Error(err);
    }
  };

  async getPreviousList() {
    try {
      return await connector.callFetch("https://api.spacexdata.com/v5/launches/past");
    } catch (err) {
      throw new Error(err);
    }
  };
};

module.exports = LaunchService;