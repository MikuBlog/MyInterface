const name = ["旋仔", "和泉纱雾", "大老师", "雪之下雪乃", "miku", "南小鸟", "艾拉", "楪祈", "金木", "高木", "22娘", "33娘", "四糸乃", "十香", "狂三", "美九", "折纸", "宫园薰", "山田", "小埋", "亚丝娜", "桐人"]
const sex = ["男", "女"]
const country = ["中国", "美国", "日本", "英国", "俄罗斯", "其他"]
const political = ["群众", "党员", "团员", "少先队员"]
const birthPlace = ["伏见稻荷大社", "浅草寺", "奈良公园", "大阪城公园", "东京塔", "京都二条城", "岚山", "上野公园", "新秀歌舞伎町", "小樽运河"]
const birthday = ["2019-01-01", "2019-02-25", "2019-05-01", "2019-04-29", "2019-10-01", "2019-11-01", "2019-12-15"]
const job = ["动漫画师", "设计师", "前端工程师", "后台工程师", "游戏开发人员", "大数据工程师", "人工智能工程师", "全栈工程师", "架构师", "产品经理", "运维人员", "客服", "销售人员", "技术总监", "高级工程师", "初级工程师", "系统开发工程师"]
const address = ["伏见稻荷大社", "浅草寺", "奈良公园", "大阪城公园", "东京塔", "京都二条城", "岚山", "上野公园", "新秀歌舞伎町", "小樽运河"]
const phone = ["12345678910", "12345428910", "12345448910", "12345258910", "12341278910", "12334567890", "121445678910"]
const userName = ["旋仔", "和泉纱雾", "大老师", "雪之下雪乃", "miku", "南小鸟", "艾拉", "楪祈", "金木", "高木", "22娘", "33娘", "四糸乃", "十香", "狂三", "美九", "折纸", "宫园薰", "山田", "小埋", "亚丝娜", "桐人"]
const password = ["123121", "3333232", "423121"]
const dateTime = ["2019-01-01", "2019-02-25", "2019-05-01", "2019-04-29", "2019-10-01", "2019-11-01", "2019-12-15"]
const idCard = ["12345678910", "12345428910", "12345448910", "12345258910", "12341278910", "12334567890", "121445678910"]
const email = ["xuanzai@qq.com" ,"xuanzai@163.com" ,"xuanzai@126.com"]
const QQ = ["12345678910", "12345428910", "12345448910", "12345258910", "12341278910", "12334567890", "121445678910"]
const wx = ["12345678910", "12345428910", "12345448910", "12345258910", "12341278910", "12334567890", "121445678910"]
const favor = ["打篮球", "打羽毛球", "打乒乓球", "踢足球", "打游戏", "逛街", "旅游"]
const religion = ["佛教", "伊斯兰教", "基督教"]
const socialCode = ["12345678910", "12345428910", "12345448910", "12345258910", "12341278910", "12334567890", "121445678910"]
const education = ["小学", "初中", "高中", "大专", "本科", "研究生", "硕士", "博士", "教授"]
const postalCode = ["528315", "520000", "133322"]
const bankAccount = ["6217112332229299344", "4627112332239299344", "3417112332129299344"]
const url = require('url')
 
function getRandomData(req, res) {
	const array = url.parse(req.url).query ? url.parse(req.url).query.split('&') : ""
	var count = ""
	const obj = {
		status: "ok",
		data: []
	}
	try {
		count = array[1].split('=')[1]
	}catch(e) {
		count = 10
	}
	for(var i = 0; i < count; i ++) {
		obj.data.push({
			name: name[parseInt(name.length * Math.random())],
			sex: sex[parseInt(sex.length * Math.random())],
			country: country[parseInt(country.length * Math.random())],
			political: political[parseInt(political.length * Math.random())],
			birthPlace: birthPlace[parseInt(birthPlace.length * Math.random())],
			birthday: birthday[parseInt(birthday.length * Math.random())],
			job: job[parseInt(job.length * Math.random())],
			address: address[parseInt(address.length * Math.random())],
			phone: phone[parseInt(phone.length * Math.random())],
			userName: userName[parseInt(userName.length * Math.random())],
			password: password[parseInt(password.length * Math.random())],
			dateTime: dateTime[parseInt(dateTime.length * Math.random())],
			idCard: idCard[parseInt(idCard.length * Math.random())],
			email: email[parseInt(email.length * Math.random())],
			QQ: QQ[parseInt(QQ.length * Math.random())],
			wx: wx[parseInt(wx.length * Math.random())],
			favor: favor[parseInt(favor.length * Math.random())],
			religion: religion[parseInt(religion.length * Math.random())],
			socialCode: socialCode[parseInt(socialCode.length * Math.random())],
			education: education[parseInt(education.length * Math.random())],
			postalCode: postalCode[parseInt(postalCode.length * Math.random())],
			bankAccount: bankAccount[parseInt(bankAccount.length * Math.random())]
		})
	}
	obj.count = count
	res.send(obj)
}

module.exports = {
	getRandomData
}

