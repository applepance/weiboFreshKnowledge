const formatTime = data =>{
    let dateNew = new Date()
    var date = new Date(date)
    const hour = date.getHours()
    const minute = date.getMinutes()
    let times = (dateNew - date) /1000;
    let tip = ''
    if(times <= 0){
        tip = '刚刚'
        return tip
    }else if(Math.floor(times/60) <= 0){
        tip = '刚刚'
        return tip
    }else if(times<3600){
        tip = Math.floor(times / 60) + '分钟前'
        return tip
    }else if(times >= 3600 && times <= 86400){
        tip = Math.floor(times/3600) + '小时前'
    }else if(times / 86400 <= 1){
        tip = Math.ceil(times / 86400) + '昨天'
    }else if(times / 86400 <= 31 && times / 86400 >1){
        tip = Math.ceil(times / 86400) + '天前'
    }else if(times / 86400 >= 31){
        tip = '好几天前'
    }else{
        tip = null
        return tip + [hour,minute].map(formatNumber).join(':')
    }
}

const formatNumber = n =>{
    n = n.toString()
    return n[1] ? n : '0' + n 
}

 module.exports = {
     formatTime:formatTime
 }