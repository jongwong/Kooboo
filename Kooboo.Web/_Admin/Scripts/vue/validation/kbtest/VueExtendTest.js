function getVueData(){
  var data=[{
    data:{
      userName:'userName',
    }
  },{
    data:{
      password:'password'
    }
  }];
  var data=Kooboo.Vue.getVueData(data);
  expect(data.data.userName).to.be('userName');
  expect(data.data.password).to.be('password');

}
function getValidationVueData(){
  var data=[{
    data:{
      userName:'userName',
    },
    validations:{
      userName:[{type:'required',message:'required'}]
    }
  },{
    data:{
      password:'password',
    },
    validations:{
      password:[{type:'required',message:'required'}]
    }
  }];

  //username
  var data=Kooboo.Vue.getVueData(data);
  expect(data.validations.userName instanceof Array).not.to.be(true);
  expect(data.validations.userName.multiRule instanceof Function).to.be(true);
  var rule=data.validations.userName.multiRule;

  var valid=rule("ss");
  expect(valid).to.be(true);
  valid=rule("");
  expect(valid).to.be(false);

  expect(data.validations.password instanceof Array).not.to.be(true);
  expect(data.validations.password.multiRule instanceof Function).to.be(true);
  var rule=data.validations.password.multiRule;

  var valid=rule("ssss");
  expect(valid).to.be(true);
  valid=rule("");
  expect(valid).to.be(false);

} 


function getMergeHooks(){
  var a=0;
  var models=[{
    created:function(){
      a++;
    }
  },{
    created:function(){
      a++;
    }
  }];
  debugger;
  var mergeHooks=Kooboo.Vue.getMergeHooks(models);
  expect(mergeHooks["created"] instanceof Function).to.be(true);

  mergeHooks["created"]();
  expect(a).to.be(2);
}