## 综述

contacts是添加联系人组件，跟手机通讯录功能一致，数据来源可以是手机系统通讯录或server上保存的数据。

* 版本：1.0
* 作者：栋寒
* 标签：mobile,通讯录
* demo：[http://gallery.kissyui.com/contacts/1.0/demo/index.html](http://gallery.kissyui.com/contacts/1.0/demo/index.html)

(访问demo最好使用移动设备，若再pc上访问，请开启chrome模拟触屏事件的配置)

## 使用场景

在hybrid、纯H5应用中，经常需要使用手机通讯录添加被操作对象，比如冲话费、赠送彩票等。

## 功能介绍

* 从手机系统或服务器一次性拉取数据，由组件缓存数据分批次渲染
* 支持手动输入手机号码，自动从缓存数据中匹配联系人姓名
* 组件为独立页面，可支持读取预存已选数据并渲染出已经联系人视图
* 提供首字母检索，且首字母序列动态递增
* 轻击已添加联系人可删除
* 设置可添加联系人的最大值及单次渲染的数据量
* 忽略索取数据的顺序，重新按首字母排序

## 初始化组件

    S.use('gallery/contacts/1.0/index', function (S, Contacts) {
		var phones = [
			{'name':'比克','phone':'13757113126'},
			{'name':'毕福剑','phone':'13757113127'},
			{'name':'李丽华','phone':'13757113116'},
			{'name':'荆轲','phone':'12345678922'},
			{'name':'何冰','phone':'12345678923'},
			{'name':'邵云','phone':'13758112880'},
			{'name':'太白','phone':'13588494123'},
			{'name':'童林','phone':'13656684279'},
			{'name':'玄清','phone':'18267126678'},
			{'name':'天樵','phone':'13656645099'},
			{'name':'天意','phone':'12345678921'},
			{'name':'zy','phone':'12345668921'},
			{'name':'阿姨','phone':'13757114126'}
		];

		var preSelectArr = ['13757113126','13757114126'];

		var contact = new Contacts({
			preSelectArr : preSelectArr,
			data : phones,
			pageSize : 5 ,
			maxSelect : 10
		});

		contact.on('selectDone' , function (obj) {
			alert('选择联系人完毕\n可使用数据完成其他操作');
			alert('已选联系人:\n' + JSON.stringify(obj));
		});

		contact.on('readAfter' , function (e) {
			alert('已经读取完预存的已选号码\n可选择性删除数据源(通常是localStorage、sessionStorage)')	
		});
	});

## 参数配置

#### data

- data {array} 
- 从手机系统或server拉取的数据 
- e.g : [ {'name':'比克','phone':'13757113126'}, {'name':'毕福剑','phone':'13757113127'}, {'name':'李丽华','phone':'13757113116'}, {'name':'荆轲','phone':'12345678922'}, {'name':'何冰','phone':'12345678923'}, {'name':'邵云','phone':'13758112880'}, {'name':'太白','phone':'13588494123'}, {'name':'童林','phone':'13656684279'}, {'name':'玄清','phone':'18267126678'}, {'name':'天樵','phone':'13656645099'}, {'name':'天意','phone':'12345678921'}, {'name':'zy','phone':'12345668921'}, {'name':'阿姨','phone':'13757114126'} ];
- 必选

#### preSelectArr 

- preSelectArr {array} 
- 预存已选择的联系人，个体为联系人号码而不是姓名
- e.g : ['13757113126','13757114126']
- 可选，默认值[]

#### pageSize

- pageSize {number} 
- 单次渲染数据量
- 可选，默认值：50

#### maxSelect

- maxSelect {number}
- 最多可添加联系人数量
- 可选, 默认值：20

## 事件

#### selectDone	

- 完成选择联系人后触发，回调参数为已选联系人数组

#### readAfter

- 当读取预存已选择联系人后触发，无回调参数
