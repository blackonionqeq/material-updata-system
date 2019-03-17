
var root = '../../../static/'
var models = [
    { modelID: 1, modelName: "MA1130-6", modelNumber: "STC-A-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190123", lastT: "20190201", imgUrl: "modelCurtailImg/MA1130-6.jpg", makings: "78,81,79,77", component: "upper/binding/lace/eyelets/inner/sole/insole", tag: "19Autumn Winter/Embroidery/Casual Shoes/Female/America" },
    { modelID: 2, modelName: "MA1129-1", modelNumber: "STC-A-1902003", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190124", lastT: "20190201", imgUrl: "modelCurtailImg/MA1129-1.jpg", makings: "77,79,81,78", component:"upper/upperpatch/inner/lace/insole/sole/thread",tag:"19Autumn Winter/Casual Shoes/Female/America/Out-earStyle/LowCut"},
    { modelID: 3, modelName: "MA1130-1", modelNumber: "STC-A-1902004", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190124", lastT: "20190202", imgUrl: "modelCurtailImg/MA1130-1.jpg", makings: "91,87,71,90,86", component: "upper1/upper2/inner/pullTape/binding/lace/insole/sole1/sole2/solelogo/tongue/thread/eyelets", tag: "19Autumn Winter/CasualShoes/Female/America/Woven" },
    { modelID: 4, modelName: "MA1130-3", modelNumber: "STC-A-2001001", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190124", lastT: "20190203", imgUrl: "modelCurtailImg/MA1130-3.jpg", makings: "71,103,97", component: "upper/lace/inner/eyelets/sole/textile printing/insole", tag: "20Spring Summer/Textile Printing/Skate Shoes/Female/America" },
    { modelID: 5, modelName: "STC-A-1201", modelNumber: "STC-A-2001002", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-A-1201.jpg", makings: "104,82,78,79,106", component: "upper1/upper2/upperdecorativePiece1/upperdecorativePiece2/upperdecorativePiece3/upperdecorativePiece4/lace/eyelets/inner/sole/insole", tag: "20Spring Summer/Casual Shoes/Out-ear Style/Eyelets" },
    { modelID: 6, modelName: "STC-B-1201", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-B-1201.jpg", makings: "101,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 7, modelName: "STC-B-1202", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-B-1202.jpg", makings: "115,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 8, modelName: "STC-B-1203", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-B-1203.jpg", makings: "143,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 9, modelName: "STC-B-1204", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-B-1204.jpg", makings: "112,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 10, modelName: "STC-C-1201", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-C-1201.jpg", makings: "200,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 11, modelName: "STC-C-1202", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-C-1202.jpg", makings: "161,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 12, modelName: "STC-C-1203", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-C-1203.jpg", makings: "163,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 13, modelName: "STC-C-1204", modelNumber: "STC-B-1902001", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/STC-C-1204.jpg", makings: "169,90", component: "upper/sole", tag: "Children's shoes/3DWoven/Cartoon" },
    { modelID: 14, modelName: "MA1130-5", modelNumber: "STC-A-1902002", series: "19Autumn Winter", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/MA1130-5.jpg", makings: "106,82,78,40,202", component: "upper decorativePiece1 decorativePiece12 decorativePiece13 eyelets inner insole sole lace", tag: "19 Autumn And Winter/External ear/Thick bottom" },
    { modelID: 15, modelName: "shoe6_1", modelNumber: "STC-D-2001001", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/shoe6_1.jpg", makings: "33,25,9,34", component: "upper inner decoration insole outsole heelLift heel upperinner", tag: "20Spring and summer/Mid heel/Bow" },
    { modelID: 16, modelName: "shoe6_2", modelNumber: "STC-D-2001002", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/shoe6_2.jpg", makings: "33,25,9,34", component: "upper inner decoration insole outsole heelLift heel upperinner", tag: "20Spring and summer/Mid heel/Bow" },
    { modelID: 17, modelName: "shoe2_1", modelNumber: "STC-D-2001003", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/shoe2_1.jpg", makings: "213,211", component: "upper inner decoration insole outsole heelLift heel", tag: "20Spring and summer" },
    { modelID: 18, modelName: "shoe2_2", modelNumber: "STC-D-2001004", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/shoe2_2.jpg", makings: "213,211", component: "upper inner decoration insole outsole heelLift heel", tag: "20Spring and summer" },
    { modelID: 19, modelName: "shoe4", modelNumber: "STC-D-2001005", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/shoe4.jpg", makings: "211,214,212,49", component: "upper inner insole midsole outsole heel", tag: "20Spring and summer" },
    { modelID: 20, modelName: "FC-03H-42", modelNumber: "FC-03H-42", series: "20Spring Summer", designer: "Stacey/Tony/Lisa/Jassica", uploadT: "20190125", lastT: "20190201", imgUrl: "modelCurtailImg/FC-03H-42.jpg", makings: "174,178,174", component: "upper/binding/lace/eyelets/inner/sole/insole", tag: "20Spring summer" },
]
models.forEach(eachModel => {
    eachModel.imgUrl = root + eachModel.imgUrl
})
// var model1 = [
//     { modelID: 1, componentName: 'inner', url: root + '/shoe1.1/inner.ctm', defaultFur: 34 },
//     { modelID: 1, componentName: 'upper', url: root + '/shoe1.1/upper.ctm', defaultFur: 3 },
//     { modelID: 1, componentName: 'heel', url: root + '/shoe1.1/heel.ctm', defaultFur: 3 },
//     { modelID: 1, componentName: 'insole', url: root + '/shoe1.1/insole.ctm', defaultFur: 34 },
//     { modelID: 1, componentName: 'outsole', url: root + '/shoe1.1/outsole.ctm', defaultFur: 20 },
//     { modelID: 1, componentName: 'midsole', url: root + '/shoe1.1/midsole.ctm', defaultFur: 3 },
//     { modelID: 1, componentName: 'decoration', url: root + '/shoe1.1/decoration.ctm', defaultFur: 19 },
//     { modelID: 1, componentName: 'embed', url: root + '/shoe1.1/embed.ctm', defaultFur: 17 },
//     { modelID: 1, componentName: 'heelLift', url: root + '/shoe1.1/heelLift.ctm', defaultFur: 3 },
//     { modelID: 1, componentName: 'lace', url: root + '/shoe1.1/lace.ctm', defaultFur: 16 },
//     { modelID: 1, componentName: 'buckle', url: root + '/shoe1.1/buckle.ctm', defaultFur: 17 },
// ]
// model1.forEach(eachModel => {
//     eachModel.fur = eachModel.defaultFur
//     eachModel.componentURL = eachModel.url.trim()
// })

           //MA1130-6
           model1 = [
            { "componentURL": "modelOriginized/MA1130-6/binding.ctm", "componentName": "binding", "fur": 70, "color": 0xB0938F, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-6/bottom.ctm", "componentName": "bottom", "fur": 76, "color": 0xA9889A, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-6/eyelets.ctm", "componentName": "eyelets", "fur": 69, "color": 0xE8B1B7, "tile": undefined},
            { "componentURL": "modelOriginized/MA1130-6/hole.ctm", "componentName": "hole", "fur": 75, "color": undefined, "tile": undefined},
            { "componentURL": "modelOriginized/MA1130-6/inner.ctm", "componentName": "inner", "fur": 71, "color": 0xB68B90, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-6/insole.ctm", "componentName": "insole", "fur": 71, "color": 0xB68B90, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-6/lace.ctm", "componentName": "lace", "fur": 72, "color": 0xCB948D, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-6/upper.ctm", "componentName": "upper", "fur": 73, "color": undefined, "tile": undefined },
        ]
        //MA1129-1
        model2 = [
            { "componentURL": "modelOriginized/MA1129-1/body.ctm", "componentName": "body", "fur": 78, "color": 0xdea592, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/bottomU.ctm", "componentName": "bottomU", "fur": 83, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/bottomM.ctm", "componentName": "bottomM", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/bottomD.ctm", "componentName": "bottomD", "fur": 85, "color": 0xfcf8e4, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/hole.ctm", "componentName": "hole", "fur": 75, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/inner.ctm", "componentName": "inner", "fur": 81, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/insole.ctm", "componentName": "insole", "fur": 79, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/lace.ctm", "componentName": "lace", "fur": 80, "color": 0xe3a78a, "tile": undefined },
            { "componentURL": "modelOriginized/MA1129-1/upper.ctm", "componentName": "upper", "fur": 77, "color": 0xe8aa99, "tile": undefined },
        ]
        //MA1130-1
        model3 = [
            { "componentURL": "modelOriginized/MA1130-1/binding.ctm", "componentName": "blending", "fur": 91, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/body.ctm", "componentName": "body", "fur": 87, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/bottomD.ctm", "componentName": "bottomD", "fur": 76, "color": 0x565656, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/bottomM.ctm", "componentName": "bottomM", "fur": 93, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/bottomU.ctm", "componentName": "bottomU", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/counterWoven.ctm", "componentName": "counterWoven", "fur": 91, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/eyelets.ctm", "componentName": "eyelets", "fur": 69, "color": 0xDDDDDD, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/hole.ctm", "componentName": "hole", "fur": 76, "color": 0xB1B1B1, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/inner.ctm", "componentName": "inner", "fur": 71, "color": 0xEEEFF1, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/insole.ctm", "componentName": "insole", "fur": 90, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/lace.ctm", "componentName": "lace", "fur": 72, "color": 0xE1E1E1, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/logo.ctm", "componentName": "logo", "fur": 76, "color": 0xD20000, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/tongue.ctm", "componentName": "tongue", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-1/upper.ctm", "componentName": "upper", "fur": 86, "color": undefined, "tile": undefined },
        ]
        //MA1130-3
        model4 = [
            { "componentURL": "modelOriginized/MA1130-3/bottom.ctm", "componentName": "bottom", "fur": 76, "color": 0xBFCBCF, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/eyelets.ctm", "componentName": "eyelets", "fur": 100, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/hole.ctm", "componentName": "hole", "fur": 75, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/inner.ctm", "componentName": "inner", "fur": 71, "color": 0x6A898E, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/insole.ctm", "componentName": "insole", "fur": 71, "color": 0x6A898E, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/lace.ctm", "componentName": "lace", "fur": 72, "color": 0x86A09D, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/tongue.ctm", "componentName": "tongue", "fur": 103, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-3/upper.ctm", "componentName": "upper", "fur": 97, "color": undefined, "tile": undefined },
        ]
        //STC-A
        model5 = [
            { "componentURL": "modelOriginized/STC-A/bottomD.ctm", "componentName": "bottomD", "fur": 85, "color": 0xf2f2f2, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/bottomM.ctm", "componentName": "bottomM", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/bottomU.ctm", "componentName": "bottomU", "fur": 83, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/decorativePiece1.ctm", "componentName": "decorativePiece1", "fur": 104, "color": 0x211C19, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/decorativePiece2.ctm", "componentName": "decorativePiece2", "fur": 104, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/decorativePiece3.ctm", "componentName": "decorativePiece3", "fur": 104, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/decorativePiece4.ctm", "componentName": "decorativePiece4", "fur": 82, "color": 0xFD7A42, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/hole.ctm", "componentName": "hole", "fur": 95, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/inner.ctm", "componentName": "inner", "fur": 78, "color": 0xF18A5D, "tile": 2 },
            { "componentURL": "modelOriginized/STC-A/insole.ctm", "componentName": "insole", "fur": 79, "color": 0xfadccb, "tile": 1.6 },
            { "componentURL": "modelOriginized/STC-A/lace.ctm", "componentName": "lace", "fur": 80, "color": 0xDEDEDE, "tile": undefined },
            { "componentURL": "modelOriginized/STC-A/toe.ctm", "componentName": "toe", "fur": 106, "color": 0xf7f7f7, "tile": 18.84 },
            { "componentURL": "modelOriginized/STC-A/tongueLoop.ctm", "componentName": "tongueLoop", "fur": 84, "color": undefined, "tile": 1.97 },
            { "componentURL": "modelOriginized/STC-A/upper.ctm", "componentName": "upper", "fur": 106, "color": 0xFF6531, "tile": undefined },
        ]
        //STC-B-1201
        model6= [
            { "componentURL": "modelOriginized/STC-B-1201/upper.ctm", "componentName": "upper", "fur": 101, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1201/bottomM.ctm", "componentName": "bottomM", "fur": 83, "color": undefined, "tile": undefined},
            { "componentURL": "modelOriginized/STC-B-1201/bottomD.ctm", "componentName": "bottomD", "fur": 76, "color": undefined, "tile": undefined},
            { "componentURL": "modelOriginized/STC-B-1201/inner.ctm", "componentName": "inner", "fur": 102, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1201/insole.ctm", "componentName": "insole", "fur": 90, "color": 0x5c5c5c, "tile": 3 },
        ]

        model7 = [
            { "componentURL": "modelOriginized/STC-B-1202/upper.ctm", "componentName": "upper", "fur": 115, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1202/bottomM.ctm", "componentName": "bottomM", "fur": 83, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1202/bottomD.ctm", "componentName": "bottomD", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1202/inner.ctm", "componentName": "inner", "fur": 116, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1202/insole.ctm", "componentName": "insole", "fur": 90, "color": 0x6e6e6e, "tile": 3 },
        ]

        model8 = [
            { "componentURL": "modelOriginized/STC-B-1203/upper.ctm", "componentName": "upper", "fur": 143, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1203/bottomM.ctm", "componentName": "bottomM", "fur": 83, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1203/bottomD.ctm", "componentName": "bottomD", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1203/inner.ctm", "componentName": "inner", "fur": 144, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1203/insole.ctm", "componentName": "insole", "fur": 90, "color": 0x6e6e6e, "tile": 3 },
        ]

        model9 = [
            { "componentURL": "modelOriginized/STC-B-1204/upper.ctm", "componentName": "upper", "fur": 112, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1204/bottomM.ctm", "componentName": "bottomM", "fur": 83, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1204/bottomD.ctm", "componentName": "bottomD", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1204/inner.ctm", "componentName": "inner", "fur": 113, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-B-1204/insole.ctm", "componentName": "insole", "fur": 90, "color": 0xCAA1B4, "tile": 3 },
            { "componentURL": "modelOriginized/STC-B-1204/pullTape.ctm", "componentName": "pullTape", "fur": 114, "color": undefined, "tile": undefined },
        ]
        //STC-C-1201
        model10 = [
            { "componentURL": "modelOriginized/STC-C-1201/upper.ctm", "componentName": "upper", "fur": 200, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1201/bottom.ctm", "componentName": "bottom", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1201/inner.ctm", "componentName": "inner", "fur": 201, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1201/insole.ctm", "componentName": "insole", "fur": 90, "color": 0x94869d, "tile": 3 },
        ]

        model11 = [
            { "componentURL": "modelOriginized/STC-C-1202/upper.ctm", "componentName": "upper", "fur": 161, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1202/bottom.ctm", "componentName": "bottom", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1202/inner.ctm", "componentName": "inner", "fur": 162, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1202/insole.ctm", "componentName": "insole", "fur": 90, "color": 0x6e6e6e, "tile": 3 },
        ]

        model12 = [
            { "componentURL": "modelOriginized/STC-C-1203/upper.ctm", "componentName": "upper", "fur": 163, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1203/bottom.ctm", "componentName": "bottom", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1203/inner.ctm", "componentName": "inner", "fur": 164, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1203/insole.ctm", "componentName": "insole", "fur": 90, "color": 0xd49ece, "tile": 3 },
        ]

        model13 = [
            { "componentURL": "modelOriginized/STC-C-1204/upper.ctm", "componentName": "upper", "fur": 169, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1204/bottom.ctm", "componentName": "bottom", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1204/inner.ctm", "componentName": "inner", "fur": 170, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/STC-C-1204/insole.ctm", "componentName": "insole", "fur": 90, "color": 0xd49eba, "tile": 3 },
            { "componentURL": "modelOriginized/STC-C-1204/pullTage.ctm", "componentName": "pullTage", "fur": 171, "color": undefined, "tile": undefined },
        ]
        //MA1130-5
        model14 = [
            { "componentURL": "modelOriginized/MA1130-5/body.ctm", "componentName": "body", "fur": 106, "color": 0x2a2a2a, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/bottomD.ctm", "componentName": "bottomD", "fur": 93, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/tongue.ctm", "componentName": "tongue", "fur": 106, "color": 0x2a2a2a, "tile": 21 },
            { "componentURL": "modelOriginized/MA1130-5/bottomU.ctm", "componentName": "bottomU", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/decorativePiece1.ctm", "componentName": "decorativePiece1", "fur": 82, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/decorativePiece2.ctm", "componentName": "decorativePiece2", "fur": 78, "color": 0x75827f, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/decorativePiece3.ctm", "componentName": "decorativePiece3", "fur": 40, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/hole.ctm", "componentName": "hole", "fur": 75, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/inner.ctm", "componentName": "inner", "fur": 40, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/insole.ctm", "componentName": "insole", "fur": 40, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/lace.ctm", "componentName": "lace", "fur": 202, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/MA1130-5/eyelets.ctm", "componentName": "eyelets", "fur": 21, "color": undefined, "tile": undefined },
        ]
        //shoe6.1
        model15 = [
            { "componentURL": "modelOriginized/shoe6.1/counterInner.ctm", "componentName": "counterInner", "fur": 212, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/decoration.ctm", "componentName": "decoration", "fur": 203, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/heel1.ctm", "componentName": "heel", "fur": 207, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/heelLift1.ctm", "componentName": "heelLift", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/inner.ctm", "componentName": "inner", "fur": 212, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/insole.ctm", "componentName": "insole", "fur": 211, "color": undefined, "tile": undefined },
            //{ "componentURL": "modelOriginized/shoe6.1/logo.ctm", "componentName": "logo", "fur": 17 },
            { "componentURL": "modelOriginized/shoe6.1/midsole.ctm", "componentName": "midsole", "fur": 207, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/outsole1.ctm", "componentName": "outsole", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.1/upper.ctm", "componentName": "upper", "fur": 207, "color": undefined, "tile": undefined },
        ]

        model16 = [
            { "componentURL": "modelOriginized/shoe6.2/counterInner.ctm", "componentName": "counterInner", "fur": 212, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/decoration.ctm", "componentName": "decoration", "fur": 203, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/heel2.ctm", "componentName": "heel", "fur": 207, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/heelLift2.ctm", "componentName": "heelLift", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/inner.ctm", "componentName": "inner", "fur": 212, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/insole.ctm", "componentName": "insole", "fur": 211, "color": undefined, "tile": undefined },
            //{ "componentURL": "modelOriginized/shoe6.2/logo.ctm", "componentName": "logo", "fur": 17 },
            { "componentURL": "modelOriginized/shoe6.2/midsole.ctm", "componentName": "midsole", "fur": 207, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/outsole2.ctm", "componentName": "outsole", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe6.2/upper.ctm", "componentName": "upper", "fur": 207, "color": undefined, "tile": undefined },
        ]
        //shoe2
        model17 = [
            { "componentURL": "modelOriginized/shoe2.1/decoration1.ctm", "componentName": "decoration", "fur": 23, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/embed.ctm", "componentName": "embed", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/heel1.ctm", "componentName": "heel", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/heelLift1.ctm", "componentName": "heelLift", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/inner.ctm", "componentName": "inner", "fur": 211, "color": undefined, "tile": 2 },
            { "componentURL": "modelOriginized/shoe2.1/insole.ctm", "componentName": "insole", "fur": 211, "color": undefined, "tile": 2 },
            { "componentURL": "modelOriginized/shoe2.1/midsole.ctm", "componentName": "midsole", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/outsole1.ctm", "componentName": "outsole", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.1/upper.ctm", "componentName": "upper", "fur": 213, "color": undefined, "tile": undefined },
        ]

        model18 = [
            { "componentURL": "modelOriginized/shoe2.2/decoration1.ctm", "componentName": "decoration", "fur": 23, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/embed.ctm", "componentName": "embed", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/heel2.ctm", "componentName": "heel", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/heelLift2.ctm", "componentName": "heelLift", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/inner.ctm", "componentName": "inner", "fur": 211, "color": undefined, "tile": 2 },
            { "componentURL": "modelOriginized/shoe2.2/insole.ctm", "componentName": "insole", "fur": 211, "color": undefined, "tile": 2 },
            { "componentURL": "modelOriginized/shoe2.2/midsole.ctm", "componentName": "midsole", "fur": 213, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/outsole2.ctm", "componentName": "outsole", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe2.2/upper.ctm", "componentName": "upper", "fur": 213, "color": undefined, "tile": undefined },
        ]
        //shoe4
        model19 = [
            { "componentURL": "modelOriginized/shoe4.1/counterInner.ctm", "componentName": "counterInner", "fur": 211, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe4.1/heel.ctm", "componentName": "heel", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe4.1/inner.ctm", "componentName": "inner", "fur": 214, "color": undefined, "tile": undefined},
            { "componentURL": "modelOriginized/shoe4.1/insole.ctm", "componentName": "insole", "fur": 212, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/shoe4.1/midsole.ctm", "componentName": "midsole", "fur": 76, "color": 0x555555, "tile": undefined },
            { "componentURL": "modelOriginized/shoe4.1/outsole.ctm", "componentName": "outsole", "fur": 76, "color": 0x000000, "tile": undefined },
            { "componentURL": "modelOriginized/shoe4.1/upper.ctm", "componentName": "upper", "fur": 49, "color": undefined, "tile": undefined },
        ]
        // 
        model20 = [
            { "componentURL": "modelOriginized/FC-03H-42/backstay.ctm", "componentName": "backstay", "fur": 280, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/binding.ctm", "componentName": "binding", "fur": 284, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/body.ctm", "componentName": "body", "fur": 274, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/bottom.ctm", "componentName": "bottom", "fur": 76, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/bottomB.ctm", "componentName": "bottomB", "fur": 272, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/bottomF.ctm", "componentName": "bottomF", "fur": 271, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/bottomM.ctm", "componentName": "bottomM", "fur": 83, "color": undefined, "tile": 20 },
            { "componentURL": "modelOriginized/FC-03H-42/eyestay.ctm", "componentName": "eyestay", "fur": 269, "color": undefined, "tile":undefined },
            { "componentURL": "modelOriginized/FC-03H-42/hole.ctm", "componentName": "hole", "fur": 75, "color": undefined, "tile": undefined },
            { "componentURL": "modelOriginized/FC-03H-42/inner.ctm", "componentName": "inner", "fur": 268, "color": 0x1b1b1b, "tile": 2.26 },
            { "componentURL": "modelOriginized/FC-03H-42/insole.ctm", "componentName": "insole", "fur": 273, "color": 0x525252, "tile": 20 },
            { "componentURL": "modelOriginized/FC-03H-42/lace.ctm", "componentName": "lace", "fur": 270, "color": undefined, "tile":undefined },
            { "componentURL": "modelOriginized/FC-03H-42/tongue.ctm", "componentName": "tongue", "fur": 275, "color": 0xEA3838, "tile": undefined },
        ]

let modelList = [
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
    model7,
    model8,
    model9,
    model10,
    model11,
    model12,
    model13,
    model14,
    model15,
    model16,
    model17,
    model18,
    model19,
    model20,
]
modelList.forEach(eachModel => {
    eachModel.forEach(eachModel2 => {
        eachModel2.componentURL = root + eachModel2.componentURL
    })
})

module.exports = { 
    models,
    model1,
    model2,
    model3,
    model4,
    model5,
    model6,
    model7,
    model8,
    model9,
    model10,
    model11,
    model12,
    model13,
    model14,
    model15,
    model16,
    model17,
    model18,
    model19,
    model20,
}
