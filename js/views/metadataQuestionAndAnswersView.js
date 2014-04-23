var MetadataAnswerView = require("../views/metadataAnswerView");
var template = require("../tmpl/metadataQuestionAndAnswers");
var Handlebones = require("handlebones");

var CV = Handlebones.CollectionView.extend({
  tagName: "ul",
  modelView: MetadataAnswerView
});


module.exports = Handlebones.ModelView.extend({
  name: "metadataQuestionAndAnswersView",
  template: template,
  allowCreate: true,
  allowDelete: false,
  CollectionView: CV,
  // itemViewForCollection: MetadataAnswerView,

  initialize: function(options) {
      // this.model = options.model; // question model
    Handlebones.ModelView.prototype.initialize.call(this);
    this.answers = this.model.collection; // answers collection
    this.answersCollectionView = this.addChild(new this.CollectionView({
      collection: this.answers
    }));
    this.zid = options.zid;
  }
});