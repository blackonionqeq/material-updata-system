import {
  saveAModel
} from '@/api/sidebar'

const save = {
  state: {

  },
  mutations: {

  },
  actions: {
    SaveAModel({},list) {
      let componentID = ''
      let materialID = ''
      let tile = ''
      let color = ''
      for(let i = 0; i < list.length; i++) {
        console.log(i, typeof list[i].tile)
        if(i === 0) {
          componentID += list[i].componentID
          materialID += list[i].materialID
          if(typeof list[i].tile == "string") {
            console.log(1)
            tile += ':-1'
          }
          else {
            tile += list[i].tile
          }
          color += list[i].color
        }
        else {
          componentID = componentID + ':' + list[i].componentID
          materialID = materialID + ':' + list[i].materialID
          color = color + ':' +  list[i].color
          if(typeof list[i].tile == "string") {
            console.log(2)
            tile += ':-1'
          }
          else {
            tile = tile + ':' +  list[i].tile
          }
        }
      }
      let tmp = {
        componentID,
        materialID,
        tile,
        color,
        shoeID: list.shoeID
      }
      console.log(tmp)
      return new Promise((resolve, reject) => {
        saveAModel(tmp).then(response => {
          const data = response.data
          console.log(response)
          resolve(data.value)
          if(data.code == 200) {
            resolve(response.data)
          }
          else
            reject(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },
}

export default save