let models = require('./modelSquare')
let model1 = models.model1
let model2 = models.model2
let model3 = models.model3
let model4 = models.model4
let model5 = models.model5
let model6 = models.model6
let model7 = models.model7
let model8 = models.model8
let model9 = models.model9
let model10 = models.model10
let model11 = models.model11
let model12 = models.model12
let model13 = models.model13
let model14 = models.model14
let model15 = models.model15
let model16 = models.model16
let model17 = models.model17
let model18 = models.model18
let model19 = models.model19
let model20 = models.model20


function getModelInfo(pointer) {
  switch(pointer) {
    case 1: return model1
    case 2: return model2
    case 3: return model3
    case 4: return model4
    case 5: return model5
    case 6: return model6
    case 7: return model7
    case 8: return model8
    case 9: return model9
    case 10: return model10
    case 11: return model11
    case 12: return model12
    case 13: return model13
    case 14: return model14
    case 15: return model15
    case 16: return model16
    case 17: return model17
    case 18: return model18
    case 19: return model19
    case 20: return model20
  }
}

module.exports = {getModelInfo}