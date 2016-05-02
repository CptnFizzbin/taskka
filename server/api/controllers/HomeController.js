/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
    return res.json({
      message: "Hello World!"
    });
  }
};

