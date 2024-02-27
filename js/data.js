const fs = require("fs")
const allData = require("./allData")

/// Load Data ///
const loadData = () => {
  try {
      const DataJson = fs.readFileSync("data.json").toString()
      return  JSON.parse(DataJson)
  }
  catch {
      return []
  }
}

/// sava All Data ///
const savaAllData = (allData) => {
  const AllDataJson = JSON.stringify(allData)
  fs.writeFileSync("data.json" , AllDataJson )
}

/// Add Data ///
const addData = (id ,fname , lname , age , city) => {
      const allData = loadData()
      const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })
      if (duplicatedDate.length == 0) {
        allData.push({
            id : id,
            fname : fname,
            lname : lname,
            age : age,
            city : city
         })
         savaAllData(allData)
      } else {
        console.log("ERROR DUPLICATED ID")
      }
}

/// Delete Data ///
const deleteData = (id) => {
  const allData = loadData()
  const dataToKeep = allData.filter((obj) => {
    return obj.id !== id    
     })
     savaAllData(dataToKeep)
     console.log("you have already deleted an Item")
}

/// Read Data ///
const readData = (id) => {
    const allData = loadData()
    const itemNeeded = allData.find((obj)=>{
         return  obj.id == id 
    })
    if (itemNeeded) {
        console.log(itemNeeded.fname)
      } else {
        console.log("id needed not found")
      } 
}

/// List Data ///
const  listData = () => {
  const allData = loadData()
  allData.forEach((obj) => {
            console.log(obj.fname , obj.age, obj.city)
        })
}


module.exports = {
    addData,
    deleteData,
    readData,
    listData
}



