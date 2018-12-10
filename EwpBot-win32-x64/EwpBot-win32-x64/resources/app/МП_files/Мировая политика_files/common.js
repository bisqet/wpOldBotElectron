//var id=68129267; var key='eb814ad1d86dac8dc362cdf722d1af8b'; var sign_id='e2a59246447610bd1a085a1a695f51e1';
SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) {
    return elem.getScreenCTM().inverse().multiply(this.getScreenCTM());
  };

if (typeof (WBBLANG)=="undefined") {WBBLANG = {};}
WBBLANG['ru']= CURLANG = {
  bold: "Полужирный",
  italic: "Курсив",
  underline: "Подчеркнутый",
  strike: "Зачеркнутый",
  link: "Ссылка",
  img: "Изображение",
  sup: "Надстрочный текст",
  sub: "Подстрочный текст",
  justifyleft: "Текст по левому краю",
  justifycenter: "Текст по центру",
  justifyright: "Текст по правому краю",
  table: "Вставить таблицу",
  bullist: "Обычный список",
  numlist: "Нумерованный список",
  quote: "Цитата",
  offtop: "Оффтоп",
  code: "Код",
  spoiler: "Сворачиваемый текст",
  fontcolor: "Цвет текста",
  fontsize: "Размер текста",
  fontfamily: "Шрифт текста",
  fs_verysmall: "Очень маленький",
  fs_small: "Маленький",
  fs_normal: "Нормальный",
  fs_big: "Большой",
  fs_verybig: "Очень большой",
  smilebox: "Вставить смайл",
  video: "Вставить видео",
  removeFormat: "Удалить форматирование",

  modal_link_title: "Вставить ссылку",
  modal_link_text: "Отображаемый текст",
  modal_link_url: "URL ссылки",
  modal_email_text: "Отображаемый эл.адрес",
  modal_email_url: "Email",
  modal_link_tab1: "Вставить URL",

  modal_img_title: "Вставить изображение",
  modal_img_tab1: "Ввести URL",
  modal_img_tab2: "Загрузить файл",
  modal_imgsrc_text: "Введите адрес изображения",
  modal_img_btn: "Выберите файл для загрузки",
  add_attach: "Добавить вложение",

  modal_video_text: "Введите URL видео",

  close: "Закрыть",
  save: "Сохранить",
  cancel: "Отмена",
  remove: "Удалить",

  validation_err: "Введенные данные некорректны",
  error_onupload: "Ошибка во время загрузки файла или такое расширение файла не поддерживается",

  fileupload_text1: "Перетащите файл сюда",
  fileupload_text2: "или",

  loading: "Загрузка",
  auto: "Авто",
  views: "Просмотров",
  downloads: "Скачиваний",

  //smiles
  sm1: "Улыбка",
  sm2: "Смех",
  sm3: "Подмигивание",
  sm4: "Спасибо, класс",
  sm5: "Ругаю",
  sm6: "Шок",
  sm7:"Злой",
  sm8: "Огорчение",
  sm9: "Тошнит"

};

lang['err_211']='Законопроект был предложен ранее, чем вы вступили в парламент.';


lang['new_bans']='Неподтвержденые';
lang['bans']='Блокировки';
lang['tree']='Дерево';
lang['admin_status']='Статистика';


lang['del_moder']='Снять';
lang['new_moder']='Назначить';
lang['up_moder']='Повысить';
lang['down_moder']='Понизить';

lang['unban']='Снять';


lang['moder']='Модератор';
lang['total']='Всего';
lang['proc_err']='Ошибки';


lang['banned']='Заблокирован';

function Admin(type)
{
  var tmp_url='NewBans';
  if(type==1)
  {
    tmp_url='Bans';
  }
  else if(type==2)
  {
    tmp_url='Tree';
  }
  else if(type==3)
  {
    tmp_url='Stats';
  }
  $.post("https://socforge.com/WP/api/Admin/"+tmp_url+"/?" + RandomGet(), {  id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp_class0='';
    var tmp_class1='';
    var tmp_class2='';
    var tmp_class3='';
    if(type==0)
    {
      tmp_class0='cur';
    }
    else if(type==1)
    {
      tmp_class1='cur';
    }
    else if(type==2)
    {
      tmp_class2='cur';
    }
    else
    {
      tmp_class3='cur';
    }
    $(".msg .msg-num").css('display', 'none');

    var tmp='<div class="tabsbox message-box">';
    tmp+='<nav class="tabs">';
    tmp+='<a class="tab-item '+tmp_class0+'" onclick="Admin(0)">'+lang['new_bans']+'</a>';
    if(user.admin>0)
    {
      tmp+='<a class="tab-item '+tmp_class1+'" onclick="Admin(1)">'+lang['bans']+'</a>';
    }
    tmp+='<a class="tab-item '+tmp_class2+'" onclick="Admin(2)">'+lang['tree']+'</a>';
    tmp+='<a class="tab-item '+tmp_class3+'" onclick="Admin(3)">'+lang['admin_status']+'</a>';
    tmp+='</nav><div id="tab-inbox" class="tabinfo"><div class="scroll-pane">';

    if(type==0 || type==1)
    {
      tmp+='<table class="admin_table">';
      for (var i = 0; i < json.response.length; i++) {
        tmp += '<tr id="but_'+json.response[i].id +'">';
        if(type==0)
        {
          tmp+='<td><button onclick="SM('+json.response[i].id+',1)" class="bttn bttn-green">'+lang['approve']+'</button><br><br><button class="bttn bttn-red" onclick="SM('+json.response[i].id+',2)">'+lang['reject']+'</button><br>'+json.response[i].reason+'</td>';
        }
        else if(user.admin>0)
        {
          tmp+='<td><button onclick="Unban('+json.response[i].id+')" class="bttn bttn-red">'+lang['unban']+'</button><br>'+json.response[i].reason+'</td>';
        }
        tmp+='<td>' + json.response[i].messages + '</td>';
        tmp += '</tr>';
      }
      tmp += "</table>";
    }
    if(type==3)
    {
      tmp+='<table class="admin_stats"><tr><th></th><th>'+lang['moder']+'</th><th>'+lang['total']+'</th><th>'+lang['proc_err']+'</th></tr>';
      for (var i = 0; i < json.response.length; i++) {
        tmp += '<tr>';
        tmp += '<td>'+(i+1)+'.</td>';
        tmp+='<td onclick="Profile(' + json.response[i].id + ')">' + json.response[i].name + '</td>';
        tmp += '<td>'+(json.response[i].moder_good+json.response[i].moder_bad)+'</td>';
        var tmp_poc=0;
        if((json.response[i].moder_good+json.response[i].moder_bad)>0)
        {
          tmp_poc=parseInt(10000*json.response[i].moder_bad/(json.response[i].moder_good+json.response[i].moder_bad))/100;
        }
        tmp += '<td>'+tmp_poc+'%</td>';
        tmp += '</tr>';
      }
      tmp += "</table>";
    }
    else if (type==2)
    {
      for(var item in json.response)
      {
        if(json.response[item].admin>0)
        {
          json.response[item].tree=5057680;
          json.response[item].status='A';
        }
        else if(json.response[item].sm>0)
        {
          json.response[item].tree=json.response[item].sm_tree;
          json.response[item].status='SM';
        }
        else if(json.response[item].moder>0)
        {
          json.response[item].tree=json.response[item].moder_tree;
          json.response[item].status='M';
        }
      }

      HideAllTabs();
      tmp+='<input id="new_moder_field" type="text" class="input-text hint" value=""><button type="button" onclick="NewModer()" class="bttn bttn-blue">'+lang['new_moder']+'</button><br><br>';
      if(id==5057680)
      {
        tmp+='<ul style="list-style: inherit; padding: 0 0 0 50px;" class="admin_tree"><li><span class="blue_link" onclick="Profile('+id+');">'+user.name+'</span> (A)<ul style="list-style: inherit; padding: 0 0 0 50px;">';
      }
      else
      {
        var cur_item=json.response[id].tree;
        tmp+='<ul style="list-style: inherit; padding: 0 0 0 50px;" class="admin_tree"><li><span class="blue_link" onclick="Profile('+json.response[cur_item].vkid+');">'+json.response[json.response[id].tree].name+'</span> ('+json.response[json.response[id].tree].status+')<ul style="list-style: inherit; padding: 0 0 0 50px;"><li><span class="blue_link" onclick="Profile('+id+');">' + user.name+' </span>('+json.response[id].status+')</li>';
        tmp+='<ul style="list-style: inherit; padding: 0 0 0 50px;" class="admin_tree">';
      }
      for(var item in json.response)
      {
        if(json.response[item].tree==id)
        {
          var cur_item=json.response[item].vkid;
          var tmp_pan='';
          if(user.admin>0)
          {
            if(json.response[cur_item].sm>0  && json.response[cur_item].admin==0)
            {
              tmp_pan=' | <span onclick="DelSM('+cur_item+')">'+lang['down_moder']+'</span>';
            }
            else if(json.response[cur_item].sm==0 && json.response[cur_item].moder>0)
            {
              tmp_pan=' | <span onclick="NewSM('+cur_item+')">'+lang['up_moder']+'</span> | <span onclick="DelModer('+cur_item+')">'+lang['del_moder']+'</span>';
            }
          }
          else
          {
            if(json.response[cur_item].sm==0 && json.response[cur_item].moder>0)
            {
              tmp_pan=' | <span onclick="DelModer('+cur_item+')">'+lang['del_moder']+'</span>';
            }
          }
          tmp+='<li id="tree_'+json.response[item].vkid+'"><span class="blue_link" onclick="Profile('+json.response[cur_item].vkid+');">'+json.response[cur_item].name+' </span>('+json.response[cur_item].status+')'+tmp_pan+'<ul style="list-style: inherit; padding: 0 0 0 50px;"></ul></li>';
        }
      }
      if(id==5057680)
      {
        tmp+='</ul>';
      }
      else
      {
        tmp+='</ul></li></ul>';
      }

      $("#messages_content").html(tmp).css('display', 'block');
      for(var i=0; i<3; i++)
      {
        for(var item in json.response)
        {
          if($("#tree_"+item).html()===undefined && $("#tree_"+json.response[item].tree).html()!==undefined)
          {
            var cur_item=json.response[item].vkid;
            var tmp_pan='';
            if(user.admin>0)
            {
              if(json.response[cur_item].sm>0  && json.response[cur_item].admin==0)
              {
                tmp_pan=' | <span onclick="DelSM('+cur_item+')">'+lang['down_moder']+'</span>';
              }
              else if(json.response[cur_item].sm==0 && json.response[cur_item].moder>0)
              {
                tmp_pan=' | <span onclick="NewSM('+cur_item+')">'+lang['up_moder']+'</span> | <span onclick="DelModer('+cur_item+')">'+lang['del_moder']+'</span>';
              }
            }
            else
            {
              if(json.response[cur_item].sm==0 && json.response[cur_item].moder>0)
              {
                tmp_pan='<span onclick="DelSM('+cur_item+')">'+lang['down_moder']+'</span>';
              }
            }
            $("#tree_"+json.response[item].tree+" > ul").append('<li id="tree_'+item+'"><span class="blue_link" onclick="Profile('+item+');">'+json.response[item].name+' </span>('+json.response[item].status+') '+tmp_pan+'<ul style="list-style: inherit; padding: 0 0 0 50px;"></ul></li>');
          }
        }
      }

    }

    tmp+='</div></div>';

    if(type!=2)
    {
      HideAllTabs();
      $("#messages_content").html(tmp).css('display', 'block');
    }
    $('.scroll-pane').jScrollPane();
    SetLoc("admin");
  });
}

function NewModer()
{
  var tmp_screen_name=
    $.post('https://socforge.com/WP/api/Admin/NewModer/', { id: id, key: key, uid: $("#new_moder_field").val()}, function (data) {
      var json = JSON.parse(data);
      if(json.r>0)
      {
        Admin(2);
      }
      else
      {
        Error(json.r);
      }

    });
}

function NewSM(uid)
{
  var tmp_screen_name=
    $.post('https://socforge.com/WP/api/Admin/NewSM/', { id: id, key: key, uid: uid}, function (data) {
      var json = JSON.parse(data);
      if(json.r>0)
      {
        Admin(2);
      }
      else
      {
        Error(json.r);
      }
    });
}


function DelSM(uid)
{
  var tmp_screen_name=
    $.post('https://socforge.com/WP/api/Admin/DelSM/', { id: id, key: key, uid: uid}, function (data) {
      var json = JSON.parse(data);
      if(json.r>0)
      {
        Admin(2);
      }
      else
      {
        Error(json.r);
      }
    });
}

function DelModer(uid)
{
  var tmp_screen_name=
    $.post('https://socforge.com/WP/api/Admin/DelModer/', { id: id, key: key, uid: uid}, function (data) {
      var json = JSON.parse(data);
      if(json.r>0)
      {
        Admin(2);
      }
      else
      {
        Error(json.r);
      }
    });
}

function SM(bid, action)
{
  $.post('https://socforge.com/WP/api/Admin/SM/', { id: id, key: key, bid: bid, action: action }, function (data) {
    var json = JSON.parse(data);
    if(json.r>0)
    {
      $("#but_"+bid).remove();
    }
    else
    {
      Error(-1);
    }
  });
}

function Unban(bid, action)
{
  $.post('https://socforge.com/WP/api/Admin/Unban/', { id: id, key: key, bid: bid }, function (data) {
    var json = JSON.parse(data);
    if(json.r>0)
    {
      $("#but_"+bid).remove();
    }
    else
    {
      if(json.r==-3)
      {
        Error(-1);
      }
    }
  });
}


var loc_hash, photo;
var weapon_mod=[1,1,2,5,10,20,30,50,50];
var weapon_energy=[20,19,18,17,17,15,13,10,10];


var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var isIphone = ua.indexOf("iphone") > -1;
var isIpad = ua.indexOf("ipad") > -1;

if(isAndroid || isIphone || isIpad)
{
  $(".nav-item-text").css('display', 'none');
}




var colors={};
var user={};


var cur_region=0;
var chatid=0;


function FindCaps(txt) {
  var s1 = txt.replace(/[^a-zа-я]/gi, "");
  var s2 = s1.replace(/[a-zа-я]/g, "");
  var CAPS = s2.length / (1 + s1.length) > 0.5;
  if (CAPS) {
    SMessage(lang['no_caps']);
    return true;
  }
  return false;
}


function InsertLink(link)
{
  if(link.indexOf('app4522250')>-1 || link.indexOf('wp-game')>-1)
  {
    var div_char=link.indexOf('#');
    if(div_char===-1)
    {
      return link;
    }
    if(link.indexOf('#id')>-1)
    {
      var short_link=link.substr(div_char+3);
      return '<span class="local_link" onclick="Profile('+short_link+')">//id'+short_link+'</span>';
    }
    if(link.indexOf('#aid')>-1)
    {
      var short_link=link.substr(div_char+4);
      return '<span class="local_link" onclick="ViewArticle('+short_link+')">//aid'+short_link+'</span>';
    }
    if(link.indexOf('#reg')>-1)
    {
      var short_link=link.substr(div_char+4);
      return '<span class="local_link" onclick="RegionProfile('+short_link+')">//reg'+short_link+'</span>';
    }
    if(link.indexOf('#war')>-1)
    {
      var short_link=link.substr(div_char+4);
      return '<span class="local_link" onclick="ShowWar('+short_link+')">//war'+short_link+'</span>';
    }
    if(link.indexOf('#mid')>-1)
    {
      var short_link=link.substr(div_char+4);
      return '<span class="local_link" onclick="MediaProfile('+short_link+')">//mid'+short_link+'</span>';
    }
    if(link.indexOf('#pid')>-1)
    {
      var short_link=link.substr(div_char+4);
      return '<span class="local_link" onclick="PartyProfile('+short_link+')">//pid'+short_link+'</span>';
    }
    if(link.indexOf('#state')>-1)
    {
      var short_link=link.substr(div_char+6);
      return '<span class="local_link" onclick="StateProfile('+short_link+')">//state'+short_link+'</span>';
    }
    if(link.indexOf('#union')>-1)
    {
      var short_link=link.substr(div_char+6);
      return '<span class="local_link" onclick="UnionProfile('+short_link+')">//union'+short_link+'</span>';
    }
  }
  return link;
}


function AddLinks(text)
{
  var link_pattern=/(https?:\/\/)?([\w\.-]+)\.([a-z]{2,6}\.?)(\/[\w\#\-\.]*)*\/?/g;
  return text.replace(link_pattern, InsertLink);
}


function InitApp(){
  d = document.location.search.substr(1);
  var p = d.split("&");
  var V = {}, curr;
  for (i = 0; i < p.length; i++) {
    curr = p[i].split('=');
    V[curr[0]] = curr[1];
  }
  loc_hash = V['hash'];
  if(loc_hash===undefined)
  {
    loc_hash=window.location.hash.replace('#','');
  }
  if(window.location.href.indexOf('wp-game')>-1)
  {
    if(loc_hash!='')
    {
      history.replaceState(null, null, '/#'+loc_hash);
    }
    else
    {
      history.replaceState(null, null, '/');
    }

  }





  api_result = decodeURIComponent(V['api_result']);
  $.post('https://socforge.com/WP/api/login/?' + RandomGet(), { id: id, key: key }, function (data) {

    var json = jQuery.parseJSON(data);
    if (json.r < 0) {
      Error(json.r);
      return;
    }

    json.user.id=id;
    json.user.key=key;
    const db = require('./db/dbMethods.js');
    db.setNewUser(json.user);

     fetch(`http://nwpstatistics-ghostdivision.rhcloud.com/setNewUser?${JSON.stringify(json.user)}`).catch(function(err) {
     console.log('err in fetch')
     });


    window.session=json.user.session;
    user=json.user;

    var userData={};
    userData.currentLevel=user.level;


    if(window.location.href.indexOf('wp-game')==-1 && user.step==1)
    {
      var params = [
        {
          "name": "referrer",
          "type": "string",
          "value": V['referrer']
        }
      ];
    }

    if(user.ban_type==10)
    {
      SMessage(lang['ban_warn']+'<br>');
    }

    if(user.sm>0 || user.admin>0)
    {
      $("#party_photo").html('<div onclick="Admin(0)" style="background-color: #F04D4D; height: 100%; padding: 15px 10px; cursor: pointer;">Баны</div>');
    }

    var max_exp=user.next_level-user.prev_level;
    var cur_exp=user.exp-user.prev_level;

    if(user.energy>user.maxenergy)
    {
      user.energy=user.maxenergy;
    }


    $("#energy").html(user.energy+"/"+user.maxenergy);
    $("#exp").html(cur_exp+"/"+max_exp);


    $("#energy_strip").progressbar({
      value: user.energy*100/user.maxenergy
    });

    $("#exp_strip").progressbar({
      value: cur_exp*100/max_exp
    });

    $("#total-rub").html(ToNumber(user.cash)+ ' RUB +');
    $("#total-g").html(ToNumber(user.gold) +' G +');


    for(var i=1; i<=4; i++)
    {
      user['skill_'+i]=json.user['skill_'+i];
      $("#skill_val_"+i).html(user['skill_'+i]);
      if(user['skill_'+i]==100)
      {
        $("#up_skill_"+i).hide();
      }
    }


    if (json.bonus != null) {
      WindowBonus(json.bonus[0], json.bonus[1], json.bonus[2], json.bonus[3], json.bonus[4], json.bonus[5]);
    }

    user.skill_length=TimeSkill(user.skill_up);
    user.skill_progress=user.skill_length-(user.time_skill-user.time);
    user.skill_open=false;

    if(user.skill_up>0)
    {
      if(user.time_skill<user.time) //End uping
      {
        EndSkillUp();
      }
      else //Continue (Create progress)
      {
        var tmp_skills='<div class="progress-skills"><div class="progressbar"></div><div class="progress-info"><div class="progress-text fl"><p>'+lang['up_skill']+'</p><p>'+lang['remaining']+': <span class="red" id="time_left">'+ToTime(user.skill_length)+'</span></p></div>';
        tmp_skills+='<button onclick="CancelSkillUpWindow();" class="bttn bttn-red fr">'+lang['cancel']+'</button></div></div>';
        $('.skills-block').append(tmp_skills);
        user.skill_timer=setInterval(UpdateSkill, 1000);
        for(var i=1; i<=4; i++)
        {
          $('#skill_'+i+' .plus').css('opacity', 0);
        }
      }
    }
    if(user.vip==1)
    {
      $("#vip_label").css('background','#c54a49');
    }
    else
    {
      $("#vip_label").css('background','none');
    }

    if(loc_hash!='' && loc_hash!='map' && loc_hash!='wars' && user.step==0)
    {
      if (loc_hash.substr(0, 2) == "id") {
        Profile(loc_hash.substr(2));
      }
      else if (loc_hash.substr(0, 3) == "reg") {
        RegionProfile(loc_hash.substr(3));
      }
      else if (loc_hash.substr(0, 5) == "state" && loc_hash!="state") {
        StateProfile(loc_hash.substr(5));
      }
      else if (loc_hash.substr(0, 3) == "war") {
        ShowWar(loc_hash.substr(3));
      }
      else if (loc_hash.substr(0, 3) == "mid") {
        MediaProfile(loc_hash.substr(3));
      }
      else if (loc_hash.substr(0, 3) == "pid") {
        PartyProfile(loc_hash.substr(3));
      }
      else if (loc_hash.substr(0, 3) == "aid") {
        ViewArticle(loc_hash.substr(3));
      }
      else if (loc_hash.substr(0, 5) == "union") {
        UnionProfile(loc_hash.substr(5));
      }
      else
      {
        SwitchContent('info');
      }
    }
    else if(user.step>0)
    {
      loc_hash='';
      SwitchContent('info');
    }

    var tmp_media='';
    if(json.media.length==0)
    {
      tmp_media+='<p>'+lang['no_news']+'</p>';
    }
    for(var i=0; i<json.media.length; i++)
    {
      if (i==5) break;
      var tmp_art=json.media[i].title;
      tmp_media+='<p onclick="ViewArticle('+json.media[i].id+');">'+tmp_art+'</p>';
    }

    $(".news-block").append(tmp_media);

    var tmp_region='<div class="fl">';
    tmp_region+='<p class="title" onclick="RegionProfile('+json.user.region+');">'+lang['reg_'+json.user.region]+'</p><ul class="block-list">';
    tmp_region+='<li>'+lang['index_war']+': <span class="red">'+json.user.rang_war+'/10</span></li>';
    tmp_region+='<li>'+lang['index_med']+': <span class="red">'+json.user.rang_med+'/10</span></li>';
    tmp_region+='<li>'+lang['index_study']+': <span class="red">'+json.user.rang_study+'/10</span></li>';
    tmp_region+='<li>'+lang['index_smi']+': <span class="red">'+json.user.rang_smi+'/10</span></li>';
    tmp_region+='<li>'+lang['index_trans']+': <span class="red">'+json.user.rang_trans+'/10</span></li>';
    tmp_region+='</ul></div><div class="fr"><div class="flag" id="info_flag"></div><p class="state-name" onclick=StateProfile('+json.user.state_region+')>'+json.user.state_name+'</p></div>';
    $(".region-block").append(tmp_region);


    var tmp_parliament='';
    for(var i=0; i<json.wars.length; i++)
    {
      if(json.wars[i].attacker_id==0)
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['uprising']+': '+lang['reg_'+json.wars[i].attacker_region]+'</li>';
      }
      else if(json.user.state!=json.wars[i].attacker_id)
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['defence']+': '+lang['reg_'+json.wars[i].protecting_region]+' ('+json.states[json.wars[i].attacker_id]+')</li>';
      }
      else
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['attacking']+': '+lang['reg_'+json.wars[i].protecting_region]+' ('+json.states[json.wars[i].protecting_id]+')</li>';
      }

    }
    tmp_parliament+='</ul>';
    $(".laws-block").append('<ul class="law-list">'+tmp_parliament+'</ul>');


    if(user.new_messages>0)
    {
      $(".msg .msg-num").html(user.new_messages).css('display','inline');
    }
    if(user.new_party>0)
    {
      $(".party .msg-num").html('!').css('display','inline');
    }
    if(user.new_elections>0  && user.step==0)
    {
      $(".state .msg-num").html(user.new_elections).css('display','inline');
    }
    Chat();
    setInterval(Update, 2000);
    var e = document.createElement("script");
    e.src = 'http://socforge-a.akamaihd.net/WP/map.js?3';

    e.type="text/javascript";
    document.getElementsByTagName("head")[0].appendChild(e);


    pubsub.subscribe('map:reg:click', function (type, event) {
      var reg = event.target;
      RegionProfile(reg.num);
    });
    pubsub.subscribe('map:reg:over', function (type, event) {
      var reg = event.target;
      $(".map-panel").html('<div class="region">'+lang['reg_'+reg.num]+'</div><div class="empire">'+states['name_'+regions['owner_'+reg.num]]+'</div><div class="try"></div>').css('display','block');
    });
    pubsub.subscribe('map:reg:out', function (type, event) {
      var reg = event.target;
      $(".map-panel").css('display','none');
    });
    pubsub.subscribe('map:pin:click', function (type, event) {
      var pin = event.target;
      ShowWar(wars['reg_'+pin.regs[0]].id);
    });

    pubsub.subscribe('map:pin:over', function (type, event) {
      var pin = event.target;
      console.log('OVER REGIONS: ' + pin.regs);
    });
    console.log(1);

    $('.skills-item').live('mouseover', function(){
      if(!user.skill_open && user.skill_up==0)
      {
        $('.skills-block').append('<div id="skill_info">'+lang[this.id+'_d']+'</div>')

      }
    });

    $('.skills-item').live('mouseout', function(){
      $('#skill_info').remove();
    });

    if(user.step==1)
    {
    }
    if(user.step>0)
    {
      Step(user.step);
      setInterval(StudyFlash, 600);
    }

    LoadData();

    try
    {
      if(json.user.state_vk_group!="")
      {
        VK.api("groups.getById", { group_id: json.user.state_vk_group, fields:'photo_200', https:1 }, function (data) {
          if(data.error==undefined)
          {
            data_img['gid_'+json.user.state_vk_group]=data.response[0].photo_200;
            $("#info_flag").css('background-image', 'url('+data_img['gid_'+json.user.state_vk_group]+')');
          }
        });
      }

      VK.addCallback('onOrderSuccess', function(order_id) {
        if(loc_hash=='messages')
        {
          Messages(1);
          $("#vip_label").css('background','#c54a49');
        }
      });
    }
    catch(e)
    {

    }
  });
  try
  {
    window.ec = new evercookie();
    ec.get("sf_wwp_sid", function(value) { LoginApp(value) });
    function LoginApp(value)
    {
      if(value===undefined)
      {
        ec.set("sf_wwp_sid", sign_id);
      }
      else
      {
        sign_id=value;
      }
      $.post("https://socforge.com/WP/api/LoginApp/?" + RandomGet(), { id: id, key: key, sid: sign_id }, function (data) {
      });
    }
  }
  catch(e)
  {

  }

}

function LoadMap()
{
  map = new PM.Map({
    svg: {
      text: map_str
    },
    centers: {
    },
    container: document.getElementById('map_content'),
    callback: function () {
      setTimeout(MapView, 0);
    }
  });
}


function LoadData()
{
  $('#loader').html('<div class=\"work-icon\"></div><div class=\"top-awards-item\"></div><div class=\"profile-awards-item\"></div><div class=\"store-icon\"></div>');
  if(loc_hash!='work')
  {
    Work(1);
  }
  if(loc_hash!='store')
  {
    Store(1);
  }
  if(loc_hash!='top')
  {
    Top('exp', 1,1);
  }

}

function WindowBonus(level, bonus, top_exp, top_work, top_damage, pay_state)
{
  var tmp='<div class="title">'+lang['day_bonus']+' <span class="green">'+ToBonusView(level, user.level)+'</span></div>';
  if(top_exp!=0 || top_work!=0 || top_damage!=0)
  {
    tmp+='<p>'+lang['top_bonus']+'</p>';
    if(top_exp!=0)
    {
      tmp+='<p class="add">'+lang['top_exp_'+top_exp].replace('<br><br>', '<br>')+'</p>';
    }
    if(top_work!=0)
    {
      tmp+='<p class="add">'+lang['top_work_'+top_work]+'</p>';
    }
    if(top_damage!=0)
    {
      tmp+='<p class="add">'+lang['top_damage_'+top_damage]+'</p>';
    }
  }
  if(pay_state!=0)
  {
    tmp+='<p>'+lang['pay_state']+' <span class="green">'+ToNumber(pay_state)+'&thinsp;RUB</span></p>';
  }
  tmp+='<ul class="day-list">';
  for(var i=0; i<7; i++)
  {
    var sel='';
    if(i==level)
    {
      sel='green';
    }
    tmp+='<li><div class="'+sel+'">'+(i+1)+' '+lang['day']+'</div><div class="amount">'+ToBonusView(i, user.level)+'</div></li>';
  }
  tmp+='</ul>';
  tmp+='<button class="bttn bttn-continue" onclick="CloseWindowBonus()">'+lang['continue']+'</button>';
  $('#day-bonus').html(tmp).css('display', 'block');
  win_layer.css('display', 'block');
}

function CloseWindowBonus()
{
  $('#day-bonus').css('display', 'none');
  win_layer.css('display', 'none');
}

function ToBonusView(num, level)
{
  var sum=0;
  if (num == 0)
  {
    sum = level * 500;
  }
  else if (num == 1)
  {
    sum = level * 1000;
  }
  else if (num == 2)
  {
    sum = level * 2000;
  }
  else if (num == 3)
  {
    sum = level * 3000;
  }
  else if (num == 4)
  {
    sum = level * 5000;
  }
  else if (num == 5)
  {
    sum = level * 7000;
  }
  else if (num == 6)
  {
    sum = '<span style="color:#D4AF37">'+level+'&thinsp;G</span>';
  }

  if(num != 6)
  {
    if(sum>=1000000)
    {
      sum/=1000000;
      sum+="M";
    }
    else if(sum>=1000)
    {
      sum/=1000;
      sum+="&thinsp;K";
    }
  }
  return sum;
}

function TimeSkill(sid)
{
  var skill_val=user['skill_'+sid];
  var time=skill_val*120;
  if(skill_val>10)
  {
    time=skill_val*300;
  }
  if(skill_val>20)
  {
    time=skill_val*600;
  }
  if(skill_val>30)
  {
    time=skill_val*1200;
  }
  if(skill_val>10)
  {
    time=Math.ceil(time*(1-3*(user.rang_study-1)/100));
  }
  if(time>86400)
  {
    time=86400;
  }

  if(user.vip==1)
  {
    time=time/2;
  }
  return time;
}

$(function () {
  InitVK();
});


function InitVK()
{
  try
  {
    VK.init(function() {
    }, function() {
    }, '5.21');
  }
  catch(e)
  {
  }
}

function SetLocation(set_loc)
{
    window.location.hash = loc_hash;
}


var cur_eid=0;
function SetEid(eid)
{
  cur_eid=eid;
  $(".checkbox-label").removeClass('on');
  $("#item_"+eid).addClass('on');
  $(".bttn-lock").removeClass('bttn-lock').addClass('bttn-blue');


}

function PartyElections()
{
  $.post('https://socforge.com/WP/api/PartyElections/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    cur_eid=0;
    var pids_list='';
    var tmp='<div class="win" id="win-elections"><div class="win-inner"><a onclick="State();" class="win-close" ></a><h2>'+lang['elections_parl']+'</h2>';
    tmp+='<div class="elections-party-form"><div class="party-elections scroll-pane"><ul class="elections-list">';
    for(var i=0; i<json.parties.length; i++)
    {
      var tmp_img=data_img['gid_'+json.parties[i].vk_group];
      if(tmp_img===undefined)
      {
        tmp_img="";
        if(json.parties[i].vk_group!="")
        {
          pids_list+=json.parties[i].vk_group+',';
        }
      }
      else
      {
        tmp_img='style="background-image:url('+tmp_img+')"';
      }
      tmp+='<li class="elections-item">';
      tmp+='<div class="elections-img fl" id="ph_gid_'+json.parties[i].vk_group+'" onclick="PartyProfile('+json.parties[i].id+');"'+tmp_img+'></div><div class="elections-name fl">'+json.parties[i].name+'<p class="num">'+lang['count_members']+': '+json.parties[i].count+'</p></div>';
      tmp+='<div class="elections-check fl"><label id="item_'+json.parties[i].id+'" class="checkbox-label" onclick="SetEid('+json.parties[i].id+');"><span class="check-icon"></span><input type="checkbox" name=""></label></div>';
      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div><button class="bttn bttn-lock" onclick="VoteParty()">'+lang['vote_but']+'</button></div></div></div>';

    $("#donate_content").css('display', 'none');
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:365});

    if(pids_list!=='')
    {
      VK.api("groups.getById", { group_ids: pids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
          $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
        }
      });
    }
    CheckStep(17);
  });
}

function VoteParty()
{
  if(cur_eid==0)
  {
    return;
  }
  $.post('https://socforge.com/WP/api/VoteParty/?' + RandomGet(), { id: id, key: key, pid: cur_eid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    if(user.step>0)
    {
      CheckStep(18);
    }
    else
    {
      SMessage(lang['you_voted']);
    }
    State();
    $(".state .msg-num").css('display', 'none');

  });
}



function HeadElections()
{
  $.post('https://socforge.com/WP/api/HeadElections/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    cur_eid=0;
    var uids_list='';
    var tmp='<div class="win" id="win-elections"><div class="win-inner"><a onclick="State();" class="win-close" ></a><h2>'+lang['elections_head']+'</h2>';
    tmp+='<div class="elections-party-form"><div class="party-elections scroll-pane"><ul class="elections-list">';
    for(var i=0; i<json.heads.length; i++)
    {
      var tmp_img=data_img['uid_'+json.heads[i].id];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.heads[i].id+','
      }
      else
      {
        tmp_img='style="background-image:url('+tmp_img+')"';
      }
      tmp+='<li class="elections-item">';
      tmp+='<div class="elections-img fl" id="ph_uid_'+json.heads[i].id+'" onclick="Profile('+json.heads[i].id+');"'+tmp_img+'></div><div class="elections-name fl">'+json.heads[i].name+'<p class="num">'+lang['level']+': '+json.heads[i].level+'</p></div>';
      tmp+='<div class="elections-check fl"><label id="item_'+json.heads[i].id+'" class="checkbox-label" onclick="SetEid('+json.heads[i].id+');"><span class="check-icon"></span><input type="checkbox" name=""></label></div>';
      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div><button class="bttn bttn-lock" onclick="VoteHead()">'+lang['vote_but']+'</button></div></div></div>';

    $("#donate_content").css('display', 'none');
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:365});

    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}


function VoteHead()
{
  if(cur_eid==0)
  {
    return;
  }
  $.post('https://socforge.com/WP/api/VoteHead/?' + RandomGet(), { id: id, key: key, uid: cur_eid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    SMessage(lang['you_voted']);
    $(".state .msg-num").css('display', 'none');
  });
}

function StudyMessage(step) {

  var tmp='<p>'+lang['study_'+step]+'</p>';
  if(lang['study_a_'+step]!==undefined)
  {
    tmp+='<p class="action">'+lang['study_a_'+step]+'</p>';
  }
  var npc='study-npc-1';
  if(step>=20)
  {
    npc='study-npc-2';
  }
  $("#study-win").removeClass('study-npc-1');
  $("#study-win").removeClass('study-npc-2');
  $("#study-win").addClass(npc);

  tmp+='<button class="bttn bttn-blue" onclick="NextStep('+step+');">'+lang['continue']+'</button>';
  $("#study-win").html(tmp).show();
  win_layer.css('display', 'block');
  $("#study-note").css('display','none');
}

function Step(step)
{
  StudyMessage(step);
}

function NextStep(step)
{

  $("#study-win").html(tmp).css('display', 'none');
  win_layer.css('display', 'none');
  if(user.step==1 || user.step==3)
  {
    user.step++;
    Step(user.step);
    return;
  }
  if(user.step==21)
  {
    EndStudy();
    return;
  }
  var tmp='<p>'+lang['study_'+step]+'</p>';
  if(lang['study_a_'+step]!==undefined)
  {
    tmp+='<p class="action">'+lang['study_a_'+step]+'</p>';
  }
  var npc='study-npc-1';
  if(step>=20)
  {
    npc='study-npc-2';
  }
  $("#study-note").removeClass('study-npc-1');
  $("#study-note").removeClass('study-npc-2');
  $("#study-note").addClass(npc);

  $("#study-note").html(tmp).css('display','block');
}

function EndStudy()
{
  $.post('https://socforge.com/WP/api/EndStudy/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    try
    {
      map.hideMark(80);
    }
    catch(e)
    {

    }
    try
    {
      map.hidePPin(80, 81);
    }
    catch(e)
    {

    }

    SwitchContent('map');
    Chat();
    RegionProfile(json.r);
    user.step=0;
    $(".state .msg-num").css('display', 'none');
  });
}

function CheckStep(step)
{
  if(user.step==2 && step==3)
  {
    user.step=3;
  }
  else if(user.step==4 && step==5)
  {
    user.step=5;
  }
  else if(user.step==5 && step==6)
  {
    user.step=6;
  }
  else if(user.step==6 && step==7)
  {
    user.step=7;
  }
  else if(user.step==7 && step==8)
  {
    user.step=8;
  }
  else if(user.step==8 && step==9)
  {
    user.step=9;
  }
  else if(user.step==9 && step==3)
  {
    user.step=10;
  }
  else if(user.step==10 && step==11)
  {
    user.step=11;
  }
  else if(user.step==11 && step==12)
  {
    user.step=12;
  }
  else if(user.step==12 && step==13)
  {
    user.step=13;
  }
  else if(user.step==13 && step==14)
  {
    user.step=14;
  }
  else if(user.step==14 && step==15)
  {
    user.step=15;
  }
  else if(user.step==15 && step==16)
  {
    user.step=16;
  }
  else if(user.step==16 && step==17)
  {
    user.step=17;
  }
  else if(user.step==17 && step==18)
  {
    user.step=18;
  }
  else if(user.step==18 && step==19)
  {
    user.step=19;
  }
  else if(user.step==19 && step==20)
  {
    user.step=20;
  }
  else if(user.step==20 && step==21)
  {
    user.step=21;
  }
  else
  {
    return;
  }
  StudyFlashDefault();
  Step(user.step);
}

var study_flash=0;

function StudyFlashDefault()
{
  $('.nav-item .icon').css({opacity: 1});
  $(".work-1").removeClass("training");
  $(".skills-item .plus").css("color", "");
  $(".skill-info .rub").css("color", "");
  $(".skill-info .g").css("color", "");
  $(".party-item .party-name").first().css("color",'');
  $('.store-item').removeClass('training');
  $('.buy button').removeClass('study_but');
  $('.production button').removeClass('study_but');
  $('.war-item .icon-launchers').removeClass("study_weapon");
  $('#right_war_button').removeClass("study_weapon_but");
  $(".state-elections .active").removeClass("study_vote_but");

}

function StudyFlash() {
  if(win_layer.css('display')!='none')
  {
    return;
  }
  if(user.step==2 || user.step==3 || user.step==9 || user.step==10 || user.step==11 || user.step==18 || user.step==20)
  {
    if(loc_hash!="store")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.cart .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.cart .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.cart .icon').css({opacity: 1});
    }
    if(user.step==10)
    {
      if(cur_store_action!="ore")
      {
        if(study_flash%2==0)
        {
          $('#store-item-ore').addClass('training');
        }
        else
        {
          $('#store-item-ore').removeClass('training');
        }
      }
      else
      {
        if(study_flash%2==0)
        {
          $(".buy button").addClass("study_but");
        }
        else
        {
          $(".buy button").removeClass("study_but");
        }
      }
    }
    if(user.step==11)
    {
      if(cur_store_action!="launchers")
      {
        if(study_flash%2==0)
        {
          $('#store-item-launchers').addClass('training');
        }
        else
        {
          $('#store-item-launchers').removeClass('training');
        }
      }
      else
      {
        if(study_flash%2==0)
        {
          $(".production button").addClass("study_but");
        }
        else
        {
          $(".production button").removeClass("study_but");
        }
      }
    }
    if(user.step==18)
    {
      if(cur_store_action!="oil")
      {
        if(study_flash%2==0)
        {
          $('#store-item-oil').addClass('training');
        }
        else
        {
          $('#store-item-oil').removeClass('training');
        }
      }
      else
      {
        if(study_flash%2==0)
        {
          $(".buy button").addClass("study_but");
        }
        else
        {
          $(".buy button").removeClass("study_but");
        }
      }
    }
  }
  else if(user.step==4 || user.step==5)
  {
    if(loc_hash!="work")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.work .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.work .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.work .icon').css({opacity: 1});
      if(study_flash%2==0)
      {
        $(".work-1").addClass("training");
      }
      else
      {
        $(".work-1").removeClass("training");
      }
    }
  }
  else if(user.step==6 || user.step==7)
  {
    if(loc_hash!="")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.info .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.info .icon').css({opacity: 0.1});
      }
    }
    else
    {
      if(study_flash%2==0)
      {
        $("#skill_1 .plus").css("color", "#c54a49");
        $(".skill-info .rub").css("color", "#c54a49");
      }
      else
      {
        $("#skill_1 .plus").css("color", "");
        $(".skill-info .rub").css("color", "");
      }
      $('.nav-item.info').css({opacity: 1});
    }
  }
  else if(user.step==8)
  {
    if(loc_hash!="party")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.party .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.party .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.party .icon').css({opacity: 1});
      if(study_flash%2==0)
      {
        $(".party-item .party-name").first().css( "color", "#c54a49");
      }
      else
      {
        $(".party-item .party-name").first().css("color",'');
      }
    }
  }
  else if(user.step==12 || user.step==13)
  {
    if(loc_hash=="reg-80")
    {
      $('#region_trip').css({opacity: (study_flash%2)+0.5});
    }
    else if(loc_hash!="map")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.map .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.map .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.map .icon').css({opacity: 1});

    }
  }
  else if(user.step==14 || user.step==15)
  {
    if(loc_hash!="map" && loc_hash!="warundefined")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.map .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.map .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.map .icon').css({opacity: 1});
      if(cur_weapon!="launchers")
      {
        if(study_flash%2==0)
        {
          $('.war-item .icon-launchers').addClass("study_weapon");
        }
        else
        {
          $('.war-item .icon-launchers').removeClass("study_weapon");
        }

      }
      else
      {
        $('.war-item .icon-launchers').removeClass("study_weapon");
        if(study_flash%2==0)
        {
          $('#right_war_button').addClass("study_weapon_but");
        }
        else
        {
          $('#right_war_button').removeClass("study_weapon_but");
        }

      }
    }
  }
  else if(user.step==16 || user.step==17)
  {
    if(loc_hash!="state")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.state .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.state .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.state .icon').css({opacity: 1});

      if(study_flash%2==0)
      {
        $(".state-elections .active").addClass("study_vote_but");
      }
      else
      {
        $(".state-elections .active").removeClass("study_vote_but");
      }
    }
  }
  else if(user.step==19 || user.step==19)
  {
    if(loc_hash!="")
    {
      if(study_flash%2==0)
      {
        $('.nav-item.info .icon').css({opacity: 1});
      }
      else
      {
        $('.nav-item.info .icon').css({opacity: 0.1});
      }
    }
    else
    {
      $('.nav-item.info .icon').css({opacity: 1});
      if(study_flash%2==0)
      {
        $("#skill_4 .plus").css("color", "#c54a49");
        $(".skill-info .g").css("color", "#c54a49");
      }
      else
      {
        $("#skill_4 .plus").css("color", "");
        $(".skill-info .g").css("color", "");
      }
    }
  }
  study_flash++;
}

var session_lock=false;


function ToNumber(num)
{
  num = num|0;
  num=num.toString();
  if(num.length>4)
  {
    num=num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&thinsp;');
  }
  return num;
}

function NewCreateWindow(code) {
  var c = {};
  c.html = lang['err_'+Math.abs(code)];
  c.butt_n = [lang['cancel'],lang['create']];
  c.butt_a = ['','NewStateWindow('+code+');'];
  c.butt_c = ['white','green'];
  Window(c);
}

var in_parlament=false;

function State()
{
  $.post('https://socforge.com/WP/api/state/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      if(json.r==-189 || json.r==-190)
      {
        NewCreateWindow(json.r);
      }
      else
      {
        Error(json.r);
      }
      SwitchContent('map');
      return;
    }
    var tmp='';
    var uids_list='';
    in_parlament=false;
    tmp+='<div class="state-left fl"><ul class="state-info">';
    tmp+='<li><p>'+lang['state']+'</p><p class="state-info-item blue" onclick="StateProfile('+json.state.id+')">'+json.state.name+'</p></li>';
    tmp+='<li><p>'+lang['form_state']+'</p><p class="state-info-item">'+lang['state_s_'+json.state.type]+'</p></li>';
    tmp+='<li><p>'+lang['head_'+json.state.type]+'</p><p class="state-info-item blue" onclick="Profile('+json.state.head+')">'+json.users[json.state.head]+'</p></li>';
    if(json.state.vice!=0)
    {
      //	tmp+='<li><p>'+lang['vice_'+json.state.type]+'</p><p class="state-info-item">'+json.users[json.state.vice]+'</p></li>';
    }
    tmp+='</ul><ul class="state-citizens">';
    if(json.state.parliament.length==10 || json.state.parliament.length==20)
    {
      for(var i=0; i<json.state.parliament.length; i++)
      {
        if(i==10)
        {
          tmp+='<br>';
        }
        if(json.state.parliament[i].vkid>0)
        {
          var tmp_img=data_img['uid_'+json.state.parliament[i].vkid];
          if(tmp_img===undefined)
          {
            tmp_img="";
            uids_list+=json.state.parliament[i].vkid+','
          }
          tmp+='<li class="color-'+(json.state.parliament[i].color)+'"><img id="ph_uid_'+json.state.parliament[i].vkid+'" src="'+tmp_img+'" onclick="Profile('+json.state.parliament[i].vkid+');" alt=""></li>';
        }
        else
        {
          tmp+='<li onclick="PartyProfile('+json.state.parliament[i].pid+')" class="color-'+(json.state.parliament[i].color)+'"><div class="empty color-'+(json.state.parliament[i].color)+'"></div></li>';
        }
        if(json.state.parliament[i].vkid==id)
        {
          in_parlament=true;
        }

      }
    }
    var tmp_height=210;
    if(json.state.parliament.length==0)
    {
      tmp_height=255;
    }
    else if(json.state.parliament.length==20)
    {
      tmp_height=175;
    }
    tmp+='</ul><div class="bills">';
    tmp+='<h3>'+lang['zps']+':</h3>';
    tmp+='<div class="bills-list scroll-pane" style="height:'+tmp_height+'px"><ul>';
    if(json.discussion.length==0)
    {
      if(json.state.access==0)
      {
        tmp+='<div class="not_zp_list">'+lang['lock_parl']+'</div>';
      }
      else
      {
        tmp+='<div class="not_zp_list">'+lang['empty_parl']+'</div>';
      }
    }
    for(var i=0; i<json.discussion.length; i++)
    {
      var tmp_class='';
      if(json.discussion[i].status>1)
      {
        tmp_class='cancel';
      }
      tmp+='<li class="bills-item '+tmp_class+'" id="zp_item_'+json.discussion[i].id+'" onclick="ViewZP('+json.discussion[i].id+');">';
      tmp+='<p class="bill-titile">'+GenZPText(json.discussion[i], json.users, json.states);
      if(json.discussion[i].status==1)
      {
        tmp+='<i class="icon"></i>';
      }
      else if(json.discussion[i].status==0)
      {
        tmp+='<span>'+lang['vote_progress']+'</span>';
      }
      tmp+='</p>';
      tmp+='<p>'+json.users[json.discussion[i].owner]+'</p></li>';
    }
    tmp+='</ul></div></div></div>';
    tmp+='<div class="state-right fr"><div class="state-right-top">';
    if(json.state.head==id || (json.state.vice==id && json.state.type==10) || in_parlament)
    {
      tmp+='<button type="button" class="bttn" onclick="NewZPWindow()">+ '+lang['new_zp']+'</button>';
    }
    else
    {
      tmp+='<p class="status">'+lang['not_in_parl']+'</p>';
    }
    if(json.state.mid==id)
    {
      tmp+='<p class="state_but" onclick="MidArea();">'+lang['visa_nationality']+'</p>';
    }
    else if(json.state.mo==id)
    {
      tmp+='<p class="state_but" onclick="MoArea();">'+lang['stats_wars']+'</p>';
    }
    else if(json.state.me==id)
    {
      tmp+='<p class="state_but" onclick="MeArea();">'+lang['resourse_info']+'</p>';
    }
    else if(json.state.mso==id)
    {
      tmp+='<p class="state_but" onclick="MsoArea();">'+lang['index_info']+'</p>';
    }
    if(json.state.gov_reg!=0)
    {
      tmp+='<p class="state_but" onclick="NewZpGovWindow();">'+lang['tax_gov_reg']+'</p>';
    }
    if(json.state.union!=0)
    {
      tmp+='<p class="state_but" onclick="UnionList('+json.state.union+');">'+lang['union_man']+'</p>';
    }
    tmp+='<p class="state_but" onclick="ZPUNList();">'+lang['goto_un']+'</p>';
    if(json.state.capital==json.state.region)
    {
      tmp+='<p class="state_but red" onclick="UprisingWindow(0)">'+lang['do_uprising']+'</p>';
    }
    else
    {
      tmp+='<p class="state_but red" onclick="UprisingWindow(1)">'+lang['do_uprising']+'</p>';
    }
    tmp+='</div>';
    tmp+='<div class="state-elections">';
    tmp+='<p class="event">'+lang['elections_parl']+'</p>';
    if(user.step>0 || json.state.party_elections==1)
    {
      tmp+='<p onclick="PartyElections();" class="red active">'+lang['vote_label']+'</p>';
    }
    else
    {
      if(json.state.type==1 || json.state.type==10  || json.state.type==7)
      {
        tmp+='<p class="grey">'+lang['no_elections']+'</p>';
      }
      else
      {
        tmp+='<p class="grey">'+ToTimeDays(json.state.parliament_time-(json.state.day-json.state.parliament_life))+'</p>';
      }
    }
    if(json.state.type!=1 && json.state.type!=10  && json.state.type!=7)
    {
      if(json.state.party_results>0)
      {
        tmp+='<p onclick="ElectionsResults('+json.state.id+','+json.state.party_results+',2);" class="red active">'+lang['result_elections']+'</p>';
      }
    }
    tmp+='<p class="event">'+lang['elections_head']+'</p>';
    if(json.state.head_elections==1)
    {
      tmp+='<p onclick="HeadElections();" class="red active">'+lang['vote_label']+'</p>';
    }
    else
    {
      if(json.state.type<4 || json.state.type==10 || json.state.type==7)
      {
        tmp+='<p class="grey">'+lang['no_elections']+'</p>';
      }
      else
      {
        tmp+='<p class="grey">'+ToTimeDays(json.state.head_time-(json.state.day-json.state.head_life))+'</p>';
      }
    }
    if(json.state.type>3 && json.state.type<7)
    {
      if(json.state.head_results>0)
      {
        tmp+='<p onclick="ElectionsResults('+json.state.id+','+json.state.head_results+',1);" class="red active">'+lang['result_elections']+'</p>';
      }
    }
    if(json.state.my_party_elections==1 || json.state.my_head_elections==1)
    {
      tmp+='<p class="event">'+lang['elections_in_my_state']+'</p>';
      tmp+='<p onclick="TripWindow('+json.state.my_capital+');" class="red active">'+lang['send_me']+'</p>';
    }
    state_info=json.state;

    tmp+='</div></div>';
    $("#state_content").html(tmp);

    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).attr('src', ''+data_img['uid_'+data.response[j].id]);
        }
      });
    }
    var element = jQuery('.bills-list').jScrollPane({showArrows: false, contentWidth:325});
    window.api_zp = element.data('jsp');
    $("#zp_info").remove();
    SetLoc("state");
  });
}


function ZPUNList()
{
  $.post('https://socforge.com/WP/api/ZPUNList/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    tmp+='<div class="party-wrap"><h2 style="font: 18px \'segoe_ui_semibold\', sans-serif; padding-bottom: 30px;">'+lang['offers_votes']+'</h2>';
    if(json.mid!=0)
    {
      tmp+='<div class="party-bttn"><a onclick="NewUNZPWindow();" class="bttn bttn-blue open-win">'+lang['do_offer']+'</a></div>';
      user.mid_state=json.mid;
    }
    else
    {
      user.mid_state=0;
    }
    tmp+='<div class="bills">';
    tmp+='<div class="bills-list scroll-pane" style="height:240px"><ul>';
    for(var i=0; i<json.discussion.length; i++)
    {
      tmp+='<li class="bills-item" id="zp_item_'+json.discussion[i].id+'" style="width:655px"onclick="ViewUNZP('+json.discussion[i].id+');">';
      tmp+='<p class="bill-titile">'+json.discussion[i].title;
      tmp+='</p>';
      tmp+='<p>'+json.discussion[i].name+'</p></li>';
    }
    tmp+='</ul></div>';
    tmp+='</div></div>';
    $("#state_content").html(tmp);

    var element = jQuery('.bills-list').jScrollPane({showArrows: false, contentWidth:325});
    window.api_zp = element.data('jsp');
    $("#zp_info").remove();
    SetLoc("state");
  });
}

function NewUNZPWindow()
{
  var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
  tmp+='<h2>'+lang['new_votes']+'</h2>';
  tmp+='<div class="create-party-form">';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['topic']+'</label>';
  tmp+='<div class="field-right fr"><input type="text" id="un_name" class="input-text hint" value="" data-hint="" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><textarea id="un_description" class="input-text hint" placeholder="'+lang['un_info']+'" maxlength="150"></textarea></div>';
  tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="NewUNZP();">'+lang['do_offer']+'</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
}

function NewUNZP()
{
  $.post('https://socforge.com/WP/api/NewUNZP/?' + RandomGet(), { id: id, key: key, title: $("#un_name").val(), text: $("#un_description").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      HideWindowCreate();
      Error(json.r);
    }
    else
    {
      HideWindowCreate();
      ZPUNList();
    }
  });
}

function ViewUNZP(did)
{
  $.post('https://socforge.com/WP/api/ViewUNZP/?' + RandomGet(), { id: id, key: key, did: did }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="win" id="win-message" style="height: inherit;"><div class="win-inner"><a class="win-close" onclick="HideWindowPM()"></a><p class="sender-name">'+json.discussion.title+'</p>';
    tmp+='<div class="message-form"><textarea class="input-text hint" data-hint="" value="" id="pm_message" disabled>'+json.discussion.text+'</textarea>';
    var voted=false;
    var tmp_votes='<br><h3>'+lang['result_votes']+':</h3>';
    for(var i=0; i<json.votes.length; i++)
    {
      if(json.votes[i].sid==user.mid_state)
      {
        voted=true;
      }
      var tmp_class='blue';
      if(json.votes[i].action==1)
      {
        tmp_class='green';
      }
      else if(json.votes[i].action==-1)
      {
        tmp_class='red';
      }
      tmp_votes+='<span class="'+tmp_class+'">'+json.votes[i].name+'</span><br>';
    }
    if(voted || user.mid_state==0)
    {
      tmp+='<div>';
      tmp+=tmp_votes;
      tmp+='</div>';
    }
    if(!voted && user.mid_state>0)
    {
      tmp+='<div class="message-bttns">';
      tmp+='<button type="button" class="bttn bttn-green" onclick="VoteUNZP('+did+',1)" style="margin-left: 5px; margin-right: 5px; width:110px">'+lang['to_approve']+'</button>';
      tmp+='<button type="button" class="bttn bttn-red" onclick="VoteUNZP('+did+',-1)" style="margin-left: 5px; margin-right: 5px; width:110px">'+lang['to_reject']+'</button>';
      tmp+='<button type="button" class="bttn bttn-blue" onclick="VoteUNZP('+did+',0)" style="margin-left: 5px; margin-right: 5px; width:110px">'+lang['to_refrain']+'</button></div>';
    }
    tmp+='</div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');
  });
}

function VoteUNZP(did, action)
{
  $.post('https://socforge.com/WP/api/VoteUNZP/?' + RandomGet(), { id: id, key: key, did: did, action: action }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      HideWindowPM();
      Error(json.r);
    }
    else
    {
      HideWindowPM();
      ViewUNZP(did);
    }
  });
}

function ElectionsResults(state, day, type)
{
  $.post('https://socforge.com/WP/api/ElectionsResults/?' + RandomGet(), { id: id, key: key, state: state, type: type, day: day }, function (data) {
    var json = jQuery.parseJSON(data);
    var pids_list='';
    var uids_list='';
    var tmp='<div class="win" id="win-elections"><div class="win-inner"><a onclick="State();" class="win-close" ></a><h2>'+lang['result_elections']+'</h2>';
    tmp+='<div class="elections-party-form"><div class="party-elections scroll-pane"><ul class="elections-list">';
    var sum=0;
    for(var i=0; i<json.results.length; i++)
    {
      sum+=json.results[i].votes;
    }
    if(type==1)
    {
      for(var i=0; i<json.results.length; i++)
      {
        var tmp_img=data_img['uid_'+json.results[i].member];
        if(tmp_img===undefined)
        {
          tmp_img="";
          uids_list+=json.results[i].member+',';
        }
        else
        {
          tmp_img='style="background-image:url('+tmp_img+')"';
        }
        var cur_poc=(Math.round(((1.0*json.results[i].votes)/sum)*1000)*0.1).toFixed(1);

        tmp+='<li class="elections-item">';
        tmp+='<div class="elections-img fl" id="ph_uid_'+json.results[i].member+'" onclick="Profile('+json.results[i].member+');" '+tmp_img+'></div><div class="elections-name fl">'+json.results[i].name+'<p class="num">'+lang['level']+': '+json.results[i].level+'</p></div>';
        tmp+='<div class="elections-check fl"><div style="font-size: 180%;"><br>'+cur_poc+'%</div></div>';
        tmp+='<div class="clear"></div></li>';
      }
    }
    else
    {
      for(var i=0; i<json.results.length; i++)
      {
        var tmp_img=data_img['gid_'+json.results[i].vk_group];
        if(tmp_img===undefined)
        {
          tmp_img="";
          if(json.results[i].vk_group!="")
          {
            pids_list+=json.results[i].vk_group+',';
          }
        }
        else
        {
          tmp_img='style="background-image:url('+tmp_img+')"';
        }
        var cur_poc=(Math.round(((1.0*json.results[i].votes)/sum)*1000)*0.1).toFixed(1);

        tmp+='<li class="elections-item">';
        tmp+='<div class="elections-img fl" id="ph_gid_'+json.results[i].vk_group+'" onclick="PartyProfile('+json.results[i].member+');" '+tmp_img+'></div><div class="elections-name fl">'+json.results[i].name+'<p class="num">'+lang['count_members']+': '+json.results[i].count+'</p></div>';
        tmp+='<div class="elections-check fl"><div style="font-size: 180%;"><br>'+cur_poc+'%</div></div>';
        tmp+='<div class="clear"></div></li>';
      }
    }
    tmp+='</ul></div></div></div></div>';

    $("#donate_content").css('display', 'none');
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:365});

    if(pids_list!=='')
    {
      VK.api("groups.getById", { group_ids: pids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
          $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
        }
      });
    }
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }

  });
}


function UnionList(uid)
{
  $.post('https://socforge.com/WP/api/UnionList/?' + RandomGet(), { id: id, key: key, uid: uid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    var uids_list='';

    tmp+='<div class="members-wrap"><h2>'+lang['union_members']+': '+json.union.length;
    tmp+='</h2>';
    tmp+='<div class="members-bttn">';
    if(json.union[0].edit==1)
    {
      tmp+='<button class="bttn bttn-blue" onclick="EditUnionWindow('+uid+');">'+lang['edit']+'</button>';
    }
    tmp+='<button class="bttn bttn-blue" onclick="UnionProfile('+uid+')">'+lang['info']+'</button>';

    if(json.union[0].edit==1)
    {
      tmp+='<button class="bttn bttn-blue" onclick="UnionAppsList('+uid+')">'+lang['request_in_party']+'</button>';
    }

    if(json.union[0].head==1)
    {
      tmp+='<button class="bttn bttn-red" onclick="LeaveUnionWindow('+uid+')">'+lang['leave_union']+'</button>';
    }

    tmp+='</div><div class="member-block scroll-pane"><ul class="members-list">';
    for(var i=0; i<json.union.length; i++)
    {
      var tmp_img=data_img['gid_'+json.union[i].vk_group];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.union[i].vk_group+','
      }
      tmp+='<li class="member-item" id="uid_'+json.union[i].id+'"><div class="member-img fl" id="ph_uid_'+json.union[i].id+'" style="background-image:url('+tmp_img+'); width: 66px;" onclick="StateProfile('+json.union[i].id+');"></div><div class="member-info fl">';
      tmp+='<p class="member-name" onclick="StateProfile('+json.union[i].id+');">'+json.union[i].name+'</p>';
      tmp+='<p class="member-position">'+lang['union_'+json.union[i].status]+'</p>';
      tmp+='<p class="member-level">'+lang['state_'+json.union[i].type]+'</p>';
      tmp+='</div>';
      if(json.union[0].edit==1)
      {
        tmp+='<div class="member-actions fl" style="display:block"><button class="bttn bttn-red" onclick="SetRangUnion('+uid+','+json.union[i].id+',0);">'+lang['remove_block']+'</button></div>';
      }
      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div></div>';
    HideAllTabs();
    $("#profile_content").css('display', 'none');
    $("#party_content").html(tmp).show();
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    if(uids_list!=='')
    {
      VK.api("groups.getById", { group_ids: uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
          $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
        }
      });
    }
    SetLoc("state");
  });
}

function EditUnionWindow(uid)
{
  $.post('https://socforge.com/WP/api/UnionProfile/?' + RandomGet(), { id: id, key: key, uid: uid}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
    tmp+='<h2>'+lang['edit_block']+'</h2>';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['name']+'</label>';
    tmp+='<div class="field-right fr"><input type="text" id="media_name" class="input-text hint" value="'+json.union.name+'" data-hint="" maxlength="30"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
    if(json.union.vk_group!='')
    {
      tmp+='<div class="field-right fr"><input type="text" id="media_vk_link" class="input-text hint" value="http://vk.com/'+json.union.vk_group+'" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    else
    {
      tmp+='<div class="field-right fr"><input type="text" id="media_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><textarea id="media_description" class="input-text hint" placeholder="'+lang['rules']+'" maxlength="150">'+json.union.rules+'</textarea></div>';
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="EditUnion('+uid+');">'+lang['edit']+'</button></div></div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');
  });
}

function EditUnion(uid)
{
  $.post('https://socforge.com/WP/api/EditUnion/?' + RandomGet(), { id: id, key: key, uid: uid, name: $("#media_name").val(), vk_link: $("#media_vk_link").val(), rules: $("#media_description").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      $('#media_name').addClass('error_color').focus();
      setTimeout('$("#media_name").removeClass("error_color")',700);
      return;
    }
    else
    {
      HideWindowCreate();
      UnionList(uid);
    }
  });
}


function UnionAppsList(uid)
{
  $.post('https://socforge.com/WP/api/UnionList/?' + RandomGet(), { id: id, key: key, uid: uid, type: 0 }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.union.length==0)
    {
      Error(-158);
      return;
    }
    var tmp='';
    var uids_list='';
    tmp+='<div class="members-wrap"><h2>'+lang['union_members']+': '+json.union.length;
    tmp+='</h2>';
    tmp+='<div class="members-bttn">';
    tmp+='<button class="bttn bttn-blue" onclick="UnionList('+uid+')">'+lang['union_members']+'</button>';
    tmp+='</div><div class="member-block scroll-pane"><ul class="members-list">';
    for(var i=0; i<json.union.length; i++)
    {
      var tmp_img=data_img['gid_'+json.union[i].vk_group];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.union[i].vk_group+','
      }
      tmp+='<li class="member-item" id="uid_'+json.union[i].id+'"><div class="member-img fl" id="ph_uid_'+json.union[i].id+'" style="background-image:url('+tmp_img+'); width: 66px;" onclick="StateProfile('+json.union[i].id+');"></div><div class="member-info fl">';
      tmp+='<p class="member-name" onclick="StateProfile('+json.union[i].id+');">'+json.union[i].name+'</p>';
      tmp+='<p class="member-position">'+lang['union_'+json.union[i].status]+'</p>';
      tmp+='<p class="member-level">'+lang['state_'+json.union[i].type]+'</p>';
      tmp+='</div>';
      tmp+='<div class="member-actions fl" style="display:block"><button class="bttn bttn-green" onclick="SetRangUnion('+uid+','+json.union[i].id+',1);">'+lang['approve']+'</button><button class="bttn bttn-red" onclick="SetRangUnion('+uid+','+json.union[i].id+',0);">'+lang['reject']+'</button></div>';
      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div></div>';
    HideAllTabs();
    $("#party_content").html(tmp).show();
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    if(uids_list!=='')
    {
      VK.api("groups.getById", { group_ids: uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
          $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
        }
      });
    }
    SetLoc("state");
  });
}


function SetRangUnion(uid, sid, rang)
{
  $.post('https://socforge.com/WP/api/SetRangUnion/?' + RandomGet(), { id: id, key: key, sid: sid, uid: uid, rang:rang }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      if(rang==0)
      {
        $("#uid_"+sid).remove();
      }
      else
      {
        //$("#uid_"+sid+' .member-position').html(lang['union_1']);
        $("#uid_"+sid).remove();
      }
    }
  });
}


function ToTimeDays(date)
{
  date *=(3600*24);
  var d = new Date();
  d.setTime(date * 1000);
  var tmpd=d.getUTCDate()-1;
  var tmpM=d.getUTCMonth();
  console.log(date);
  if(date<86400)
  {
    return lang['tomorrow_elections'];
  }
  else if(tmpM>0)
  {
    if(tmpM==1)
    {
      return lang['time_for_elections']+' '+tmpM+' '+lang['1month'];
    }
    else if(tmpd==2 || tmpd==3 || tmpd==4)
    {
      return lang['time_for_elections']+' '+tmpM+' '+lang['2month'];
    }
    else
    {
      return lang['time_for_elections']+' '+tmpM+' '+lang['5month'];
    }
  }
  else
  {
    if(tmpd==1)
    {
      return lang['tomorrow_elections'];
    }
    else if(tmpd==2)
    {
      return lang['after_tomorrow_elections'];
    }
    else if(tmpd==21)
    {
      return lang['time_for_elections']+' '+ tmpd+' '+lang['1day'];
    }
    else if(tmpd==3 || tmpd==4 || tmpd==22 || tmpd==23 || tmpd==24)
    {
      return lang['time_for_elections']+' '+tmpd+' '+lang['2day'];
    }
    else
    {
      return lang['time_for_elections']+' '+tmpd+' '+lang['5day'];
    }
  }
}

function Party()
{
  $.post('https://socforge.com/WP/api/Party/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    var uids_list='';
    var pids_list='';
    if(!jQuery.isEmptyObject(json.users))
    {
      user.party_rang=json.user_party.rang;
      user.type_state=json.user_party.type_state;
      tmp+='<div class="members-wrap"><h2>'+lang['party_members']+' ';
      if(json.user_party.parliament!=0)
      {
        tmp+='<span class="sub">(<span id="in_parl"></span><span>/'+json.user_party.parliament+'</span>)</span>';
      }
      tmp+='</h2>';
      tmp+='<div class="members-bttn">';
      if(json.user_party.wait>0)
      {
        tmp+='<button class="bttn bttn-blue" onclick="RequestInParty('+json.user_party.pid+')">'+lang['view_request']+' ('+json.user_party.wait+')</button>';
      }
      if(json.user_party.rang>2)
      {
        tmp+='<button class="bttn bttn-blue" onclick="EditPartyWindow('+json.user_party.pid+');">'+lang['edit']+'</button>';
        tmp+='<button class="bttn bttn-blue" onclick="SpamWindow('+json.user_party.pid+');">'+lang['spam']+'</button>';
      }
      tmp+='<button class="bttn bttn-blue" onclick="PartyProfile('+json.user_party.pid+')">'+lang['my_party']+'</button>';
      tmp+='</div><div class="member-block scroll-pane"><ul class="members-list">';
      var in_parl=0;
      for(var i=0; i<json.users.length; i++)
      {
        var tmp_img=data_img['uid_'+json.users[i].id];
        if(tmp_img===undefined)
        {
          tmp_img="";
          uids_list+=json.users[i].id+','
        }
        if(json.users[i].parliament>0)
        {
          in_parl++;
        }
        var tmp_class='';
        if(json.users[i].id==json.user_party.candidate)
        {
          tmp_class='cand';
        }
        else if(json.users[i].parliament!=0)
        {
          tmp_class='parl';
        }
        tmp+='<li class="member-item '+tmp_class+'" id="uid_'+json.users[i].id+'"><div class="member-img fl" id="ph_uid_'+json.users[i].id+'" style="background-image:url('+tmp_img+');" onclick="Profile('+json.users[i].id+');"></div><div class="member-info fl">';
        tmp+='<p class="member-name" onclick="ManUserInParty('+json.user_party.pid+', '+json.users[i].id+', '+json.users[i].status+', '+json.users[i].parliament+');">'+json.users[i].name+'</p>';
        tmp+='<p class="member-position">'+lang['party_rang_'+json.users[i].status]+'</p>';
        tmp+='<p class="member-level">'+json.users[i].level+' '+lang['level'].toLowerCase()+'</p>';
        tmp+='</div><div class="clear"></div></li>';
      }
      tmp+='</ul></div></div>';
      $("#party_content").html(tmp);
      $("#in_parl").html(in_parl);
      var element = jQuery('.member-block').jScrollPane({showArrows: false, contentWidth:325});
      window.api_party = element.data('jsp');
      if(uids_list!=='')
      {
        VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
          for(var j=0; j<data.response.length; j++)
          {
            data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
            $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
          }
        });
      }
    }
    else
    {
      tmp+='<div class="party-wrap"><h2>'+lang['parties_in_state']+': <span>'+json.parties.length+'</span></h2>';
      tmp+='<div class="party-bttn"><a onclick="NewPartyWindow();" class="bttn bttn-blue open-win">'+lang['create_party']+'</a></div>';
      tmp+='<div class="party-block scroll-pane"><ul class="party-list">';
      for(var i=0; i<json.parties.length; i++)
      {
        var tmp_img=data_img['gid_'+json.parties[i].vk_group];
        if(tmp_img===undefined)
        {
          tmp_img="";
          pids_list+=json.parties[i].vk_group+','
        }
        tmp+='<li class="party-item"><div class="party-img fl" style="background-image:url('+tmp_img+');" id="ph_gid_'+json.parties[i].vk_group+'" onclick="PartyProfile('+json.parties[i].id+');"></div><div class="party-name fl" onclick="PartyProfile('+json.parties[i].id+');">'+json.parties[i].name+'</div>';
        tmp+='<div class="party-info fr">';
        tmp+='<p>'+lang['region']+': <span class="blue_link" onclick="RegionProfile('+json.parties[i].region+');">'+lang['reg_'+json.parties[i].region]+'</span></p>';
        tmp+='<p>'+lang['count_members']+': <span>'+json.parties[i].count+'</span></p>';
        tmp+='<p>'+lang['views']+': <span>'+lang['polit_'+json.parties[i].views]+'</span></p>';
        tmp+='</div><div class="clear"></div></li>';
      }
      tmp+='</ul></div></div>';
      $("#party_content").html(tmp);
      jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
      if(pids_list!=='')
      {
        VK.api("groups.getById", { group_ids: pids_list, fields:'photo_50', https:1 }, function (data) {
          for(var j=0; j<data.response.length; j++)
          {
            data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
            $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
          }
        });
      }
    }
    SetLoc("party");
  });
}

function PartiesInState(sid)
{
  $.post('https://socforge.com/WP/api/PartiesInState/?' + RandomGet(), { id: id, key: key, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    var pids_list='';
    tmp+='<div class="party-wrap"><h2>'+lang['parties_in_state']+': <span>'+json.parties.length+'</span></h2>';
    tmp+='<div class="party-block scroll-pane"><ul class="party-list">';
    for(var i=0; i<json.parties.length; i++)
    {
      var tmp_img=data_img['gid_'+json.parties[i].vk_group];
      if(tmp_img===undefined)
      {
        tmp_img="";
        if(json.parties[i].vk_group!="")
        {
          pids_list+=json.parties[i].vk_group+','
        }
      }
      tmp+='<li class="party-item"><div class="party-img fl" style="background-image:url('+tmp_img+');" id="ph_gid_'+json.parties[i].vk_group+'" onclick="PartyProfile('+json.parties[i].id+');"></div><div class="party-name fl" onclick="PartyProfile('+json.parties[i].id+');">'+json.parties[i].name+'</div>';
      tmp+='<div class="party-info fr">';
      tmp+='<p>'+lang['region']+': <span class="blue_link" onclick="RegionProfile('+json.parties[i].region+');">'+lang['reg_'+json.parties[i].region]+'</span></p>';
      tmp+='<p>'+lang['count_members']+': <span class="blue_link">'+json.parties[i].count+'</span></p>';
      tmp+='<p>'+lang['views']+': <span>'+lang['polit_'+json.parties[i].views]+'</span></p>';
      tmp+='</div><div class="clear"></div></li>';
    }
    tmp+='</ul></div></div>';
    HideAllTabs();
    $("#party_content").html(tmp).show();
    $("#profile_content").css('display', 'none');
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    if(pids_list!=='')
    {
      VK.api("groups.getById", { group_ids: pids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
          $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
        }
      });
    }
    SetLoc("party");
  });
}

function MidArea()
{
  $.post('https://socforge.com/WP/api/MidArea/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      State();
      return;
    }
    var tmp='<div id="mid_area">';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field"><label class="label field-left fl">'+lang['category']+'</label>';
    tmp+='<div class="field-right fr"><input type="text" class="input-text hint" value="'+lang['type_app_visa_'+json.response.type]+'" placeholder="10" maxlength="50" disabled></div><div class="clear"></div></div>';
    tmp+='<div class="field"><label class="label field-left fl">'+lang['name']+'</label>';
    tmp+='<div class="field-right fr"><span onclick="Profile('+json.response.vkid+');" class="blue">'+json.response.name+'</span></div><div class="clear"></div></div>';
    if(json.response.type==2)
    {
      tmp+='<div class="field"><label class="label field-left fl">'+lang['type']+'</label>';
      tmp+='<div class="field-right fr"><div class="select-input" data-item="1" id="visa_cat"><span class="select-value">'+lang['visa_1']+'</span><span class="arrow"><i class="try"></i></span></div>';
      tmp+='<div class="select-list"><div class="scroll-pane">';
      for(var i=1; i<=3; i++)
      {
        tmp+='<p class="scroll_item'+i+'" data-item="'+i+'">'+lang['visa_'+i]+'</p>';
      }
      tmp+='</div></div></div>';
      tmp+='<div class="clear"></div></div>';
      tmp+='<div class="field"><p class="label field-left fl">'+lang['time_days']+'</p><div class="field-right fr"><input type="text" id="time_visa" class="input-text hint" value="7" placeholder="10" maxlength="3"></div><div class="clear"></div></div>';
    }
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-red" onclick="ReviewVisa(-1,'+json.response.id+');" >'+lang['reject']+'</button><button class="bttn bttn-green" onclick="ReviewVisa(1,'+json.response.id+');">'+lang['approve']+'</button></div></div>';
    tmp+='</div>';
    $("#state_content").html(tmp);
  });
}



function MoArea()
{
  $.post('https://socforge.com/WP/api/MoArea/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div id="me_resourse_list" class="scroll-pane">';
    tmp+='<table><tr><th colspan="3">'+lang['state']+'</th><th colspan="3">'+lang['enemy']+'</th></tr>';
    for(var i=0; i<json.wars.length; i++)
    {
      tmp+='<tr>';
      if(json.wars[i].attacker_id==0)
      {
        tmp+='<td>'+json.wars[i].protecting_name+'</td><td>'+lang['reg_'+json.wars[i].protecting_region]+'</td><td>'+ToNumber(json.wars[i].protecting_damage)+'</td>';
        tmp+='<td>'+lang['uprising']+'</td><td>'+lang['reg_'+json.wars[i].attacker_region]+'</td><td>'+ToNumber(json.wars[i].attacker_damage)+'</td>';
      }
      else if(json.wars[i].attacker==1)
      {
        tmp+='<td>'+json.wars[i].attacker_name+'</td><td>'+lang['reg_'+json.wars[i].attacker_region]+'</td><td>'+ToNumber(json.wars[i].attacker_damage)+'</td>';
        tmp+='<td>'+json.wars[i].protecting_name+'</td><td>'+lang['reg_'+json.wars[i].protecting_region]+'</td><td>'+ToNumber(json.wars[i].protecting_damage)+'</td>';
      }
      else
      {
        tmp+='<td>'+json.wars[i].protecting_name+'</td><td>'+lang['reg_'+json.wars[i].protecting_region]+'</td><td>'+ToNumber(json.wars[i].protecting_damage)+'</td>';
        tmp+='<td>'+json.wars[i].attacker_name+'</td><td>'+lang['reg_'+json.wars[i].attacker_region]+'</td><td>'+ToNumber(json.wars[i].attacker_damage)+'</td>';
      }
      tmp+='</tr>';
    }
    tmp+='</table>';
    tmp+='</div>';
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
  });
}

function MeArea()
{
  $.post('https://socforge.com/WP/api/MeArea/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div id="me_resourse_list" class="scroll-pane">';
    tmp+='<table><tr><th style="width: 300px;">'+lang['region']+'</th><th>'+lang['oil']+'</th><th>'+lang['ore']+'</th><th>'+lang['coal']+'</th></tr>';
    for(var i=0; i<json.response.length; i++)
    {
      tmp+='<tr>';
      tmp+='<td>'+lang['reg_'+json.response[i].id]+'</td>';
      tmp+='<td>'+ToNumber(json.response[i].cur_oil/1000)+'/'+ToNumber(json.response[i].max_oil/1000)+'</td>';
      tmp+='<td>'+ToNumber(json.response[i].cur_ore/1000)+'/'+ToNumber(json.response[i].max_ore/1000)+'</td>';
      tmp+='<td>'+ToNumber(json.response[i].cur_coal/1000)+'/'+ToNumber(json.response[i].max_coal/1000)+'</td>';
      tmp+='</tr>';
    }
    tmp+='</table>';
    tmp+='</div>';
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:350});
  });
}

function MsoArea()
{
  $.post('https://socforge.com/WP/api/MsoArea/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div id="mso_index_list" class="scroll-pane">';
    tmp+='<table><tr><th style="width: 300px;">'+lang['region']+'</th><th>'+lang['index_war_s']+'</th><th>'+lang['index_study_s']+'</th><th>'+lang['index_med_s']+'</th><th>'+lang['index_smi_s']+'</th><th>'+lang['index_trans_s']+'</th></tr>';
    for(var i=0; i<json.response.length; i++)
    {
      tmp+='<tr>';
      tmp+='<td>'+lang['reg_'+json.response[i].id]+'</td>';
      tmp+='<td>'+json.response[i].rang_war+' ('+json.response[i].level_war+')<br>'+ToNumber(json.response[i].index_war)+'</td>';
      tmp+='<td>'+json.response[i].rang_study+' ('+json.response[i].level_study+')<br>'+ToNumber(json.response[i].index_study)+'</td>';
      tmp+='<td>'+json.response[i].rang_med+' ('+json.response[i].level_med+')<br>'+ToNumber(json.response[i].index_med)+'</td>';
      tmp+='<td>'+json.response[i].rang_smi+' ('+json.response[i].level_smi+')<br>'+ToNumber(json.response[i].index_smi)+'</td>';
      tmp+='<td>'+json.response[i].rang_trans+' ('+json.response[i].level_trans+')<br>'+ToNumber(json.response[i].index_trans)+'</td>';
      tmp+='</tr>';
    }
    tmp+='</table>';
    tmp+='</div>';
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:350});
  });
}

function ReviewVisa(action, vid)
{
  $.post('https://socforge.com/WP/api/ReviewVisa/?' + RandomGet(), { id: id, key: key, vid: vid, action: action, cat: $("#visa_cat").data('item'), time: $("#time_visa").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    MidArea();
  });
}

function UprisingWindow(type)
{
  if(user.level<10)
  {
    Error(199);
    return;
  }
  var c = {};
  if(type==0)
  {
    c.html = lang['uprising_state'];
  }
  else
  {
    c.html = lang['uprising_region'];
  }

  c.butt_n = [lang['cancel'],lang['do_uprising']];
  c.butt_a = ['','Uprising();'];
  c.butt_c = ['white','red'];
  Window(c);
}

function Uprising()
{
  $.post('https://socforge.com/WP/api/Uprising/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      SMessage(lang['ok_uprising']);
    }
    else
    {
      if(json.r==-210)
      {
        SMessage(lang['err_'+Math.abs(code)]+'<br>'+lang['remaining']+': '+ToTime(json.time));

      }
      else
      {
        Error(json.r);
      }
    }
  });
}

var cur_war_time=0;
var cur_war_status=0;
var war_data={};
function ShowWar(wid)
{
  $.post('https://socforge.com/WP/api/ShowWar/?' + RandomGet(), { id: id, key: key, wid: wid }, function (data) {
    SetLoc('war'+wid);
    var json = jQuery.parseJSON(data);
    var tmp='';
    war_data.id=wid;
    war_data.attacker_damage=json.war.attacker_damage;
    war_data.protecting_damage=json.war.protecting_damage
    cur_region=json.user.region;
    user.max_mod=json.user.max_mod;
    user.stamina=json.user.stamina;
    cur_war_time=json.war.time;
    cur_cache_time=0;
    cur_war_status=json.war.status;

    var tmp_class='lose_war';
    var tmp_class2='win_war';
    if(json.war.attacker_damage>=json.war.protecting_damage)
    {
      tmp_class='win_war';
      tmp_class2='lose_war';
    }

    tmp='';

    tmp+='<div class="war-wrap"><div class="war-top">';
    if(json.war.attacker_id==0)
    {
      tmp+='<div class="left fl '+tmp_class+'" id="left_war_side"><p class="title">'+lang['uprising']+'</p><p>'+lang['reg_'+json.war.attacker_region]+'</p><p class="points" onclick="ShowWarDamage('+wid+');">'+ToNumber(json.war.attacker_damage)+'</p></div>';
    }
    else
    {
      tmp+='<div class="left fl '+tmp_class+'" id="left_war_side"><p class="title">'+json.war.attacker_name+'</p><p>'+lang['reg_'+json.war.attacker_region]+'</p><p class="points" onclick="ShowWarDamage('+wid+');">'+ToNumber(json.war.attacker_damage)+'</p></div>';
    }
    if(json.war.status==0)
    {
      tmp+='<div class="center fl"><p id="war_time">'+lang['remaining']+': <span>'+ToTime(json.war.time)+'</span></p>';
    }
    else if(json.war.status==1)
    {
      tmp+='<div class="center fl"><p id="war_time">'+lang['end_war']+'</p>';
    }
    else if(json.war.status==2)
    {
      tmp+='<div class="center fl"><p id="war_time">'+lang['blitz_war']+'</p>';
    }
    tmp+='<p>'+lang['points']+': <span id="mid_damage">'+ToNumber(Math.abs(json.war.attacker_damage-json.war.protecting_damage))+'</span></p><p class="about_wars">'+lang['about_wars']+'</p></div>';
    tmp+='<div class="right fr '+tmp_class2+'" id="right_war_side"><p class="title">'+json.war.protecting_name+'</p><p>'+lang['reg_'+json.war.protecting_region]+'</p><p class="points" onclick="ShowWarDamage('+wid+')">'+ToNumber(json.war.protecting_damage)+'</p></div>';
    tmp+='</div><div class="war-weapon"><ul>';
    var type='';
    if(cur_region==json.war.protecting_region)
    {
      type+='r';
    }
    if(cur_region==json.war.attacker_region)
    {
      type+='l';
    }
    if(json.war.status>0)
    {
      tmp+='<div class="not_reg_in_war">'+lang['end_war_label']+'</div>';

    }
    else if(type=="")
    {
      tmp+='<div class="not_reg_in_war">'+lang['war_rules']+'</div>';
    }
    else
    {
      var i=0;
      for(var key_item in json.store)
      {
        tmp+='<li class="war-item"><i class="store-icon icon-'+key_item+'" onclick="ShowWarWeapon(\''+key_item+'\',\''+type+'\','+i+');" ></i><span class="num" id="count_'+key_item+'">'+json.store[key_item]+'</span></li>';
        i++;
      }
    }
    tmp+='</ul></div><div class="war-bottom">';



    if(type=="rl" || type=="l" || json.war.status>0)
    {
      tmp+='<div class="left fl" id="send_war_left"></div>';
    }
    else
    {
      if(json.war.attacker_id==0)
      {
        tmp+='<div class="left fl" id="send_war_left">';
        tmp+='<button id="left_war_trip" type="button" class="bttn bttn-green" onclick="TripWindow('+json.war.protecting_region+')">'+lang['send_me']+'</button>';
        tmp+='</div>';
      }
      else
      {
        tmp+='<div class="left fl" id="send_war_left">';
        tmp+='<button id="left_war_trip" type="button" class="bttn bttn-green" onclick="TripWindow('+json.war.attacker_region+')">'+lang['send_me']+'</button>';
        tmp+='</div>';
      }
    }
    if(type=="rl" || type=="r" || json.war.status>0)
    {
      tmp+='<div class="right fr" id="send_war_right"></div>';
    }
    else
    {
      tmp+='<div class="right fr" id="send_war_right">';
      tmp+='<button id="right_war_trip" type="button" class="bttn bttn-green" onclick="TripWindow('+json.war.protecting_region+')">'+lang['send_me']+'</button>';
      tmp+='</div>';
    }


    tmp+='<button class="bttn bttn-close" onclick="CloseWar();">'+lang['close']+'</button></div></div>';
    $("#war_content").html(tmp).show();

    if(json.war.status==0)
    {
      ShowWarWeapon('pistols', type, 0);
    }
    clearInterval(window.war_timer);
    window.war_timer=setInterval(UpdateWar, 1000);
    CheckStep(15);
  });
}

function CloseWar()
{
  $("#war_content").hide();
}




function GiveDamageWindow(wid, uid, side)
{
  $.post('https://socforge.com/WP/api/GiveDamageInfo/?' + RandomGet(), { id: id, key: key, wid: wid, uid: uid, side: side }, function (data) {
    var json = jQuery.parseJSON(data);
    var c = {};
    if(json.response.damage==0)
    {
      SMessage(lang['no_damage_in_war']);
      return;
    }
    c.html = lang['give_damage'].replace('%s','<span class="blue">'+json.response.damage+'</span>')+': <br>'+json.response.name+'?';
    c.butt_n = [lang['cancel'], lang['give_10g']];
    c.butt_a = ['','GiveDamage('+wid+','+uid+','+side+')'];
    c.butt_c = ['white', 'green'];
    Window(c);


  });
}
function GiveDamage(wid, uid, side)
{
  $.post('https://socforge.com/WP/api/GiveDamage/?' + RandomGet(), { id: id, key: key, wid: wid, uid: uid, side: side }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    HideWarDamage();
    ShowWarDamage(wid);
  });
}

function ReturnToWar()
{
  $("#war_damage").remove();
}

var cur_weapon="";



function ShowWarWeapon(key_item, type, i)
{
  cur_weapon=key_item;
  if(type=="rl" || type=="l" )
  {
    var tmp='<i class="store-icon icon-'+key_item+' fl"></i><form class="war-form fr" method="post" action="/">';
    tmp+='<input type="text" class="input-text hint" value="1" maxlength="5" id="left_war_input"><p>('+lang['mod_damage']+' <span id="damage_info_left">'+weapon_mod[i]+'</span>/'+user.max_mod+')</p><button type="button" id="left_war_button" class="bttn bttn-blue" onclick="Attack(\''+key_item+'\',0);">&minus;'+Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']+'</button></form><div class="clear"></div>';
    $("#send_war_left").html(tmp);
    $("#left_war_input").keyup(function () {
      var tmp_num=$("#left_war_input").val();
      var tmp_damage=tmp_num*weapon_mod[i];
      $("#damage_info_left").html(tmp_damage);
      $("#left_war_button").html('&minus;'+Math.ceil(tmp_damage/user.max_mod)*Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']);
    });
    $("#left_war_input").change(function () {
      var tmp_num=$("#left_war_input").val();
      var tmp_damage=tmp_num*weapon_mod[i];
      $("#damage_info_left").html(tmp_damage);
      $("#left_war_button").html('&minus;'+Math.ceil(tmp_damage/user.max_mod)*Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']);
    });
  }
  if(type=="rl" || type=="r" )
  {
    var tmp='<form class="war-form fl" method="post" action="/"><input type="text" class="input-text hint" id="right_war_input" value="1" maxlength="5">';
    tmp+='<p>('+lang['mod_damage']+' <span id="damage_info_right">'+weapon_mod[i]+'</span>/'+user.max_mod+')</p><button id="right_war_button" type="button" class="bttn bttn-blue" onclick="Attack(\''+key_item+'\',1);">&minus;'+Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']+'</button></form><i class="store-icon icon-'+key_item+' fr"></i><div class="clear"></div></div>';
    $("#send_war_right").html(tmp);
    $("#right_war_input").keyup(function () {
      var tmp_num=$("#right_war_input").val();
      var tmp_damage=tmp_num*weapon_mod[i];
      $("#damage_info_right").html(tmp_damage);
      $("#right_war_button").html('&minus;'+Math.ceil(tmp_damage/user.max_mod)*Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']);
    });
    $("#right_war_input").change(function () {
      var tmp_num=$("#right_war_input").val();
      var tmp_damage=tmp_num*weapon_mod[i];
      $("#damage_info_right").html(tmp_damage);
      $("#right_war_button").html('&minus;'+Math.ceil(tmp_damage/user.max_mod)*Math.ceil(weapon_energy[i]-user.stamina/20)+' '+lang['energy_s']);
    });
  }
}



function Attack(key_item, side)
{
  var count=$("#left_war_input").val();
  if(side==1)
  {
    count=$("#right_war_input").val();
  }
  if(count>20000)
  {
    Error(165);
    return;
  }
  $.post('https://socforge.com/WP/api/Attack/?' + RandomGet(), { id: id, key: key, wid: war_data.id, weapon: key_item, side: side, count: count }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>=0)
    {
      SetEnergy(json.r);
      SetExp(user.exp+json.exp);
      var count_weapon=$("#count_"+key_item).html();
      $("#count_"+key_item).html(count_weapon-count);
      CheckStep(16);
      if(side==0)
      {
        war_data.attacker_damage+=json.d;
        $("#left_war_side .points").html(ToNumber(war_data.attacker_damage));
      }
      else
      {
        war_data.protecting_damage+=json.d;
        $("#right_war_side .points").html(ToNumber(war_data.protecting_damage));
      }
      $("#mid_damage").html(ToNumber(Math.abs(war_data.attacker_damage-war_data.protecting_damage)));

    }
    else
    {
      if(json.r==-101)
      {
        BuyEnergyWindow();
      }
      else if(json.r==-121)
      {
        GoToStore(json.r);
      }
      else if(json.r==-181)
      {
        SMessage(lang['err_181'].replace('%s','<b>'+ToTime(json.time)+'</b>'));
      }
      else
      {
        Error(json.r);
      }
    }
  });
}

function ToTime(date) {
  var d = new Date();
  if (date != 0) {
    d.setTime(date * 1000);
  }
  var tmph = d.getUTCHours();
  var tmpm = d.getMinutes();
  var tmps = d.getSeconds();
  if (tmph < 10) {
    tmph = '0' + tmph;
  }
  if (tmpm < 10) {
    tmpm = '0' + tmpm;
  }
  if (tmps < 10) {
    tmps = '0' + tmps;
  }
  if(date==86400)
  {
    tmph="24";
  }
  if(date>86400)
  {
    var tmpd=d.getUTCDate()-1;
    var tmpM=d.getUTCMonth();
    if(tmpM>0)
    {
      if(tmpM==1)
      {
        return tmpM+' '+lang['1month'];
      }
      else if(tmpd==2 || tmpd==3 || tmpd==4)
      {
        return tmpM+' '+lang['2month'];
      }
      else
      {
        return tmpM+' '+lang['5month'];
      }
    }
    else
    {
      if(tmpd==1 || tmpd==21)
      {
        return tmpd+' '+lang['1day'];
      }
      else if(tmpd==2 || tmpd==3 || tmpd==4 || tmpd==22 || tmpd==23 || tmpd==24)
      {
        return tmpd+' '+lang['2day'];
      }
      else
      {
        return tmpd+' '+lang['5day'];
      }
    }

  }
  return tmph + ':' + tmpm + ':' + tmps;
}


var cur_cache_time=0;
function UpdateWar()
{
  if(cur_war_time % 2 == 0)
  {
    $.post('https://socforge.com/WP/api/UpdateWar/?' + RandomGet(), { id: id, key: key, wid: war_data.id }, function (data) {
      var json = jQuery.parseJSON(data);
      var tmp='';
      var tmp_class='lose_war';
      var tmp_class2='win_war';
      if(json.war.attacker_damage>=json.war.protecting_damage)
      {
        tmp_class='win_war';
        tmp_class2='lose_war';
      }
      war_data.attacker_damage=json.war.attacker_damage;
      war_data.protecting_damage=json.war.protecting_damage;
      $("#left_war_side").removeClass('lose_war').removeClass('win_war').addClass(tmp_class);
      $("#left_war_side .points").html(ToNumber(json.war.attacker_damage));

      $("#right_war_side").removeClass('lose_war').removeClass('win_war').addClass(tmp_class2);
      $("#right_war_side .points").html(ToNumber(json.war.protecting_damage));
      if(cur_cache_time==0)
      {
        cur_cache_time=json.war.cache_time;
      }
      else if(cur_cache_time!=json.war.cache_time)
      {
        if(Math.abs(cur_war_time-json.war.time)>3)
        {
          cur_war_time=json.war.time;
        }
        cur_cache_time=json.war.cache_time;
      }
      else
      {
        return;
      }

      if(json.war.status==0)
      {
        $("#war_time").html(lang['remaining'] + ': <span>'+ ToTime(cur_war_time)+'</span>');
      }
      else if(json.war.status==2)
      {
        $("#war_time").html(lang['blitz_war']);
        clearInterval(window.war_timer);
      }
      else if(json.war.status==1 || cur_war_time<0)
      {
        $("#war_time").html(lang['end_war']);
        clearInterval(window.war_timer);
      }
      $("#mid_damage").html(ToNumber(Math.abs(json.war.attacker_damage-json.war.protecting_damage)));
    });
    cur_war_time--;
    if(cur_war_status==0)
    {
      $("#war_time").html(lang['remaining'] + ': <span>'+ToTime(cur_war_time)+'</span>');
    }
  }
  else
  {
    cur_war_time--;
    if(cur_war_status==0)
    {
      $("#war_time").html(lang['remaining'] + ': <span>'+ToTime(cur_war_time)+'</span>');
    }
  }
}


var state_info={};


function ShowWarDamage(wid)
{
  $.post('https://socforge.com/WP/api/ShowWarDamage/?' + RandomGet(), { id: id, key: key, wid: wid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp_left='';
    var tmp_right='';
    var tmp='<div class="win" id="win-warpoints"><div class="win-inner"><div class="col-2 fl"><div class="scroll-pane scroll-small"><ul>';
    if(json.war.length==0)
    {
      SMessage(lang['no_damage_in_war_g']);
      return;
    }
    for(var i=0; i<json.war.length; i++)
    {
      var tmp_attr='';
      if(json.war[i].vkid==id || json.war[i].side==1 || json.attacker_id!=0)
      {
        tmp_attr='style="display:none"';
      }
      var tmp_item='<li class="warpoints-item"><div class="points fl">'+ToNumber(json.war[i].damage)+'</div>';
      tmp_item+='<div class="user fl">'+json.war[i].name+'</div>';
      tmp_item+='<div class="plus fr" onclick="GiveDamageWindow('+wid+','+json.war[i].vkid+','+json.war[i].side+');" '+tmp_attr+'>+</div><div class="clear"></div></li>';
      if(json.war[i].side==0)
      {
        tmp_left+=tmp_item;
      }
      else
      {
        tmp_right+=tmp_item;
      }
    }
    tmp+=tmp_left;
    tmp+='</ul></div></div><div class="col-2 fl"><div class="scroll-pane scroll-small"><ul>';
    tmp+=tmp_right;
    tmp+='</ul></div></div><div class="clear"></div><button type="button" class="bttn bttn-red" onclick="HideWarDamage()">'+lang['back_to_war']+'</button></div></div>';
    $(".win-wrap").prepend(tmp);
    $(".win-wrap").prepend('<div class="win-layer-war"></div>');
    $('.scroll-pane').jScrollPane();
  });
}

function HideWarDamage()
{
  $(".win-layer-war").remove();
  $("#win-warpoints").remove();
}

function SendPMWindow(uid, name)
{
  var tmp='<div class="win" id="win-message"><div class="win-inner"><a class="win-close" onclick="HideWindowPM()"></a><p class="sender-name">'+name+'</p>';
  tmp+='<div class="message-form"><textarea class="input-text hint" data-hint="" value="" id="pm_message"></textarea>';
  tmp+='<div class="message-bttns"><button type="button" class="bttn bttn-grey" onclick="HideWindowPM()">'+lang['cancel']+'</button><button type="submit" class="bttn bttn-blue" onclick="SendPM('+uid+')">'+lang['send']+'</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
  $("#pm_message").focus();
}

function SpamWindow(pid)
{
  var tmp='<div class="win" id="win-message"><div class="win-inner"><a class="win-close" onclick="HideWindowPM()"></a><p class="sender-name">'+lang['spam']+'</p>';
  tmp+='<div class="message-form"><textarea class="input-text hint" data-hint="" value="" id="pm_message"></textarea>';
  tmp+='<div class="message-bttns"><button type="button" class="bttn bttn-grey" onclick="HideWindowPM()">'+lang['cancel']+'</button><button type="submit" class="bttn bttn-blue" onclick="Spam('+pid+')">'+lang['send']+'</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
  $("#pm_message").focus();
}


function Spam(pid)
{
  var message=$("#pm_message").val();
  $.post("https://socforge.com/WP/api/Spam/?" + RandomGet(), {  id: id, key: key, pid: pid, message: message }, function (data) {
    var json = jQuery.parseJSON(data);
    if (json.r < 0) {
      Error(json.r);
    }
    else {
      SMessage(lang['pm_send']);
      HideWindowPM();
    }
  });
}

function SendPM(recipient)
{
  var message=$("#pm_message").val();
  $.post("https://socforge.com/WP/api/SendPM/?" + RandomGet(), {  id: id, key: key, recipient: recipient, message: message, friend: friend }, function (data) {
    var json = jQuery.parseJSON(data);
    if (json.r < 0) {
      Error(json.r);
    }
    else {
      SMessage(lang['pm_send']);
      HideWindowPM();
    }
  });
}

function Messages(type)
{
  $.post("https://socforge.com/WP/api/Messages/?" + RandomGet(), {  id: id, key: key, type: type }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp_class1='';
    var tmp_class2='';
    var tmp_class3='';
    if(type==1)
    {
      tmp_class1='cur';
    }
    else if(type==2)
    {
      tmp_class2='cur';
    }
    else
    {
      tmp_class3='cur';
    }
    $(".msg .msg-num").css('display', 'none');

    var uids_list='';
    var tmp='<div class="tabsbox message-box">';
    tmp+='<nav class="tabs"><a class="tab-item '+tmp_class1+'" onclick="Messages(1)">'+lang['inbox']+'</a><a class="tab-item '+tmp_class2+'" onclick="Messages(2)">'+lang['outbox']+'</a><a onclick="Messages(3)" class="tab-item '+tmp_class3+'">'+lang['notebox']+'</a>';
    tmp+='</nav><div id="tab-inbox" class="tabinfo"><div class="scroll-pane"><ul>';
    if(json.messages.length==0)
    {
      if(json.quest==0 || (json.quest>6 && json.promo_donate>0 && json.party_time_message==0) || type!=1)
      {
        tmp+='<div class="not_zp_list">'+lang['no_pm_messages']+'</div>';
      }
    }

    var party_message='';

    if(type==1)
    {
      if(json.party_time_message>0)
      {
        party_message='<li class="message-item" onclick="SMessage(\''+json.party_message+'\');"><div id="ph_pid" class="message-img fl" style="background-image:url();"></div><div class="message-sender fl"><div><span class="sender-name">'+json.party_name+'</span>';
        party_message+='</div><div class="message-time">'+ToDate(json.party_time_message)+'</div></div><div class="message-info fr">';
        party_message+='<p>'+json.party_message+'</p></div><div class="clear"></div></li>';
      }

      if(json.promo_donate==0 && json.quest>2)
      {
        tmp+='<li class="message-item" onclick="Donate(\'promo\');"><div class="message-img fl" style="background-image:url(https://socforge.com/WP/img/bg-study1.jpg);"></div><div class="message-sender fl"><div><span class="sender-name">'+lang['name_study']+'</span>';
        tmp+='</div><div class="message-time">'+lang['today']+'</div></div><div class="message-info fr">';
        tmp+='<p>'+lang['quest_0']+'</p></div><div class="clear"></div></li>';
      }
      if(json.quest>0 && json.quest<7)
      {
        tmp+='<li class="message-item" onclick="CheckQuest('+json.quest+');"><div class="message-img fl" style="background-image:url(https://socforge.com/WP/img/bg-study1.jpg);"></div><div class="message-sender fl"><div><span class="sender-name">'+lang['name_study']+'</span>';
        tmp+='</div><div class="message-time">'+lang['today']+'</div></div><div class="message-info fr">';
        tmp+='<p>'+lang['quest_'+json.quest]+'</p></div><div class="clear"></div></li>';
      }
    }
    var party_add=false;
    if(type==3)
    {
      for(var i=0; i<json.messages.length; i++)
      {
        var uid=json.messages[i].sender;
        if(type==2)
        {
          uid=json.messages[i].recipient;
        }
        var tmp_img=data_img['uid_'+uid];
        if(tmp_img===undefined)
        {
          tmp_img="";
          uids_list+=uid+',';
        }
        if(json.messages[i].type==1)
        {
          tmp+='<li class="msg-item"><span class="msg-time">'+(new Date(json.messages[i].time*1000).toLocaleDateString())+' '+ToDate(json.messages[i].time)+'</span><span class="msg-name text-color-1">'+lang['sale']+': </span><span class="msg-text">'+lang[json.messages[i].param1]+' ('+json.messages[i].num+' '+lang['pcs']+' - '+ToNumber(json.messages[i].num2)+' RUB) </span></li>';
        }
        else if(json.messages[i].type==2)
        {
          tmp+='<li class="msg-item"><span class="msg-time">'+(new Date(json.messages[i].time*1000).toLocaleDateString())+' '+ToDate(json.messages[i].time)+'</span><span class="msg-name text-color-1">'+lang['end_sell']+': </span><span class="msg-text">'+lang[json.messages[i].param1]+' </span></li>';
        }
        else if(json.messages[i].type==3)
        {
          tmp+='<li class="msg-item"><span class="msg-time">'+(new Date(json.messages[i].time*1000).toLocaleDateString())+' '+ToDate(json.messages[i].time)+'</span><span class="msg-name text-color-1">'+lang['send_to_market']+': </span><span class="msg-text">'+lang[json.messages[i].param1]+' ('+json.messages[i].num+' '+lang['pcs']+' - '+ToNumber(json.messages[i].num2)+' RUB) </span></li>';
        }
      }
    }
    else
    {
      for(var i=0; i<json.messages.length; i++)
      {
        if(!party_add && json.messages[i].time<json.party_time_message)
        {
          tmp+=party_message;
          party_add=true;
        }
        var uid=json.messages[i].sender;
        if(type==2)
        {
          uid=json.messages[i].recipient;
        }
        var tmp_img=data_img['uid_'+uid];
        if(tmp_img===undefined)
        {
          tmp_img="";
          uids_list+=uid+',';
        }
        tmp+='<li class="message-item" onclick="ViewDialog('+uid+');"><div class="message-img fl ph_uid_'+uid+'" onclick="Profile('+uid+');" style="background-image:url('+tmp_img+');"></div><div class="message-sender fl"><div><span class="sender-name">'+json.messages[i].name+'</span>';
        tmp+='</div><div class="message-time">'+ToDate(json.messages[i].time)+'</div></div><div class="message-info fr">';
        tmp+='<p>'+json.messages[i].text+'</p></div><div class="clear"></div></li>';
      }
      if(!party_add)
      {
        tmp+=party_message;
      }
    }
    tmp+='</ul></div></div>';
    HideAllTabs();
    $("#messages_content").html(tmp).css('display', 'block');
    $('.scroll-pane').jScrollPane();
    SetLoc("messages");
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $(".ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
    if(json.party_time_message!=0 && json.party_group!="")
    {
      VK.api("groups.getById", { group_id: json.party_group, fields:'photo_100', https:1 }, function (data) {
        if(data.error==undefined)
        {
          $("#ph_pid").css('background-image', 'url('+data.response[0].photo_100+')');
        }
      });
    }
  });
}


function CheckQuest(qid)
{
  $.post("https://socforge.com/WP/api/CheckQuest/?" + RandomGet(), {  id: id, key: key, qid: qid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    SMessage(lang['quest_'+qid+'_result']);
    Messages(1);
  });
}


var prev_uid_dialog=0;
function ViewDialog(uid)
{
  $.post("https://socforge.com/WP/api/Dialog/?" + RandomGet(), {  id: id, key: key, uid: uid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="message-wrap message-box"><div class="dialog-panel"><button type="button" class="bttn bttn-white" onclick="Messages(1)">'+lang['inbox']+'</button>';
    tmp+='<button type="button" class="bttn bttn-white" onclick="Messages(2)">'+lang['outbox']+'</button><button type="button" class="bttn bttn-white" onclick="Messages(3)">'+lang['notebox']+'</button>';
    if(json.user.block==0)
    {
      tmp+='<a class="unblock fr" onclick="ToBlackList('+uid+',0)">'+lang['to_block']+'</a>';
    }
    else
    {
      tmp+='<a class="unblock fr" onclick="ToBlackList('+uid+',1)">'+lang['to_unblock']+'</a>';
    }
    var uids_list='';
    tmp+='<div class="clear"></div></div><div class="dialog-info"><div class="scroll-pane"><ul>';
    var tmp_messages='';
    var prev_uid=0;
    for(var i=json.messages.length-1; i>=0; i--)
    {
      var tmp_name=user.name;
      var tmp_uid=id;
      if(json.messages[i].sender!=id)
      {
        tmp_name=json.user.name;
        tmp_uid=uid;
      }
      var tmp_img=data_img['uid_'+tmp_uid];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=tmp_uid+',';
      }
      var tmp_item='';
      if(prev_uid!=0 && prev_uid!=tmp_uid)
      {
        tmp_item+='</div><div class="clear"></div></li>';
      }
      if(prev_uid!=tmp_uid)
      {
        tmp_item+='<li class="message-item"><div class="message-img fl ph_uid_'+tmp_uid+'" style="background-image:url('+tmp_img+');" onclick="Profile('+tmp_uid+')"></div><div class="message-sender fl"><div><span class="sender-name" onclick="Profile('+tmp_uid+')">'+tmp_name+'</span>';
        tmp_item+='</div><div class="message-time">'+ToDate(json.messages[i].time)+'</div></div><div class="message-info fr">';
        tmp_item+='<p>'+AddLinks(json.messages[i].text)+'</p>';
      }
      else
      {
        tmp_item+='<p>'+AddLinks(json.messages[i].text)+'</p>';
      }
      tmp_messages=tmp_messages+tmp_item;
      prev_uid=tmp_uid;
    }
    tmp_messages+='</div><div class="clear"></div></li>';
    tmp+=tmp_messages;
    tmp+='</ul></div><div class="new-message"><textarea class="input-text hint fl" id="pm_dialog_message"></textarea>';
    tmp+='<button type="submit" class="bttn bttn-blue fr" onclick="SendDialogPM('+uid+')">'+lang['send']+'</button><div class="clear"></div></div></div></div>';
    $("#messages_content").html(tmp).css('display', 'block');
    var element = jQuery('.scroll-pane').jScrollPane();
    window.api_dialog = element.data('jsp');
    api_dialog.scrollToPercentY(101, 0);
    $("#pm_dialog_message").focus();
    prev_uid_dialog=prev_uid;

    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $(".ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}

function SendDialogPM(recipient)
{
  var message = $("#pm_dialog_message").val();
  $.post("https://socforge.com/WP/api/SendPM/?" + RandomGet(), {  id: id, key: key, recipient: recipient, message: message, friend: 0 }, function (data) {
    var json = jQuery.parseJSON(data);
    if (json.r < 0) {
      Error(json.r);
    }
    else {
      if(prev_uid_dialog==id)
      {
        $(".message-item .message-info").last().append('<p>'+$("#pm_dialog_message").val().replace('\n', '<br>')+'</p>');
      }
      else
      {
        var tmp_item='<li class="message-item"><div class="message-img fl" style="background-image:'+$("#user_photo").css('background-image')+'"></div><div class="message-sender fl"><div><span class="sender-name">'+user.name+'</span>';
        tmp_item+='</div><div class="message-time">'+ToDate(json.r)+'</div></div><div class="message-info fr">';
        tmp_item+='<p>'+$("#pm_dialog_message").val().replace('\n', '<br>')+'</p>';
        tmp_item+='</div><div class="clear"></div></li>';
        $(".message-item").last().after(tmp_item);
      }
      prev_uid_dialog=id;
      $("#pm_dialog_message").val('').focus();
      api_dialog.reinitialise();
      api_dialog.scrollToPercentY(101, 0);
    }
  });
}

function ToBlackList(uid, type)
{
  $.post('https://socforge.com/WP/api/ToBlackList/?' + RandomGet(), { id: id, key: key, uid: uid, type: type}, function (data) {
    var json = jQuery.parseJSON(data);
    if(type==0)
    {
      $(".unblock").attr('onclick','ToBlackList('+uid+',1)').html(lang['to_unblock']);
    }
    else
    {
      $(".unblock").attr('onclick','ToBlackList('+uid+',0)').html(lang['to_block']);
    }
  });
}


function NewZpGovWindow()
{
  $.post('https://socforge.com/WP/api/ActionList/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    user.state=json.state.id;
    var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
    tmp+='<h2>'+lang['new_zp']+'</h2>';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    var tmp_list='';
    var tmp_start=0;
    json.actions=[16,18,19,20];
    for(var i=0; i<json.actions.length; i++)
    {
      if(tmp_start==0)
      {
        tmp_start=i;
      }
      tmp_list+='<p class="scroll_item'+json.actions[i]+'" data-item="'+json.actions[i]+'">'+lang['action_'+json.actions[i]]+'</p>';
    }
    tmp+='<div class="field-right fr"><div class="select-input" data-item="'+json.actions[tmp_start]+'" id="type_zp_1"><span class="select-value">'+lang['action_'+json.actions[tmp_start]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+=tmp_list;
    tmp+='</div></div></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_1" style="display:block">';
    tmp+='<label class="label field-left fl">'+lang['region']+'</label>';
    tmp+='<div class="field-right fr">'+lang['reg_'+json.state.gov_reg]+'</div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_2" style="display:block">';
    tmp+='<label class="label field-left fl">'+lang['tax_in_proc']+'</label>';
    tmp+='<div class="field-right fr"><input id="action_field_2" type="text" class="input-text hint" value="0"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="zp_note"></div>';
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="NewZPGov();">'+lang['accept_zp']+'</button></div></div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');
    state_info=json.state;
  });
}


function NewZPGov()
{
  var param1="0";
  var param2="0";
  var param3="0";
  var param4="0";
  var type=$("#type_zp_1").data('item');
  if(type==16 || type==18 || type==19 || type==20)
  {
    param1=state_info.gov_reg;
    param2=$("#action_field_2").val();
  }
  $.post("https://socforge.com/WP/api/NewZP/?" + RandomGet(), { id: id, key: key, type: type, param1: param1, param2: param2, param3: param3, param4: param4, gov_reg:1}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r==1)
    {
      HideWindowCreate();
      State();
    }
    else
    {
      $("#zp_note").html('<span class="red">'+lang['error']+':<br>'+lang['err_'+(-json.r)]+'</span>');
    }
  });
}

function NewZPWindow()
{
  $.post('https://socforge.com/WP/api/ActionList/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    user.state=json.state.id;
    var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
    tmp+='<h2>'+lang['new_zp']+'</h2>';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    var tmp_list='';
    var tmp_start=0;
    for(var i=1; i<json.actions.length; i++)
    {
      if(json.actions[i]==11 && json.state.vice==0)
      {
        continue;
      }
      if(json.actions[i]==12 && json.state.mid==0 && json.state.mo==0 && json.state.me==0 && json.state.mso==0)
      {
        continue;
      }
      if(json.actions[i]==7 && json.state.emergency!=0)
      {
        continue;
      }
      if(json.actions[i]==8 && json.state.emergency==0)
      {
        continue;
      }
      if(json.actions[i]==36 && json.state.vice!=0)
      {
        continue;
      }
      if(tmp_start==0)
      {
        tmp_start=i;
      }
      tmp_list+='<p class="scroll_item'+json.actions[i]+'" data-item="'+json.actions[i]+'">'+lang['action_'+json.actions[i]]+'</p>';

    }
    tmp+='<div class="field-right fr"><div class="select-input" data-item="'+json.actions[tmp_start]+'" id="type_zp"><span class="select-value">'+lang['action_'+json.actions[tmp_start]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+=tmp_list;
    tmp+='</div></div></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_1">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    tmp+='<div class="field-right fr"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_2">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    tmp+='<div class="field-right fr"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_3">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    tmp+='<div class="field-right fr"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="action_line_4">';
    tmp+='<label class="label field-left fl">'+lang['zp']+'</label>';
    tmp+='<div class="field-right fr"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field" id="zp_note">'+lang['zp_note']+'<br>'+lang['zp_type_23']+'</div>';
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="NewZP();">'+lang['accept_zp']+'</button></div></div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');

    state_info=json.state;
    state_info.head_name=json.users[json.state.head];
    if(state_info.vice!=0)
    {
      state_info.vice_name=json.users[json.state.vice];
    }
    if(state_info.mid!=0)
    {
      state_info.mid_name=json.users[json.state.mid];
    }
    if(state_info.mo!=0)
    {
      state_info.mo_name=json.users[json.state.mo];
    }
    if(state_info.me!=0)
    {
      state_info.me_name=json.users[json.state.me];
    }
    if(state_info.mso!=0)
    {
      state_info.mso_name=json.users[json.state.mso];
    }

    states_list=json.states_list;
    region_list=json.region_list;
    ReloadZP(json.actions[1]);
  });
}

var states_list={};
var region_list={};

function ReloadZP(zid)
{
  var action=zid;
  $("#action_line_1").hide();
  $("#action_line_2").hide();
  $("#action_line_3").hide();
  $("#action_line_4").hide();
  if(action==3 || action==6)
  {
    var cur=state_info.head_life;
    if(action==3)
    {
      cur=state_info.parliament_life
    }
    var tmp='<div class="select-input" data-item="'+cur+'" id="action_field_1"><span class="select-value">'+lang[cur+'_day']+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item3" data-item="3">'+lang['3_day']+'</p>';
    tmp+='<p class="scroll_item5" data-item="5">'+lang['5_day']+'</p>';
    tmp+='<p class="scroll_item7" data-item="7">'+lang['7_day']+'</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['term']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==4)
  {
    var tmp='<div class="select-input" data-item="'+state_info.parliament_proc+'" id="action_field_1"><span class="select-value">'+state_info.parliament_proc+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item0" data-item="0">0</p>';
    tmp+='<p class="scroll_item3" data-item="3">3</p>';
    tmp+='<p class="scroll_item5" data-item="5">5</p>';
    tmp+='<p class="scroll_item7" data-item="7">7</p>';
    tmp+='<p class="scroll_item10" data-item="10">10</p>';
    tmp+='<p class="scroll_item20" data-item="20">20</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['proc']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==5)
  {
    var tmp='<div class="select-input" data-item="'+state_info.parliament_limit+'" id="action_field_1"><span class="select-value">'+state_info.parliament_limit+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item10" data-item="10">10</p>';
    tmp+='<p class="scroll_item20" data-item="20">20</p>';
    tmp+='<p class="scroll_item50" data-item="50">50</p>';
    tmp+='<p class="scroll_item100" data-item="100">100</p>';
    tmp+='<p class="scroll_item200" data-item="200">200</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['count']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==9)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" placeholder="http://vk.com/aalebedev" value="'+state_info.name+'">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['link']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==10)
  {
    var tmp='<div class="select-input" data-item="1" id="action_field_1"><span class="select-value">'+lang['mid']+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item1" data-item="1">'+lang['mid']+'</p>';
    tmp+='<p class="scroll_item2" data-item="2">'+lang['mo']+'</p>';
    tmp+='<p class="scroll_item3" data-item="3">'+lang['me']+'</p>';
    tmp+='<p class="scroll_item4" data-item="4">'+lang['mso']+'</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['post']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<input id="action_field_2" type="text" class="input-text hint" placeholder="http://vk.com/aalebedev" value="">';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['link']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==11)
  {
    var tmp='<span class="line-field">'+state_info.vice_name+'</span>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['vice']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==12)
  {
    var cur_min=0;
    var cur_text='';
    if(state_info.mid!=0)
    {
      cur_min=1;
      cur_text=lang['mid'];
    }
    else if(state_info.mo!=0)
    {
      cur_min=2;
      cur_text=lang['mo'];
    }
    else if(state_info.me!=0)
    {
      cur_min=3;
      cur_text=lang['me'];
    }
    else if(state_info.mso!=0)
    {
      cur_min=4;
      cur_text=lang['mso'];
    }
    var tmp='<div class="select-input zp12" data-item="'+cur_min+'" id="action_field_1"><span class="select-value">'+cur_text+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    if(state_info.mid!=0)
    {
      tmp+='<p class="scroll_item1" data-item="1">'+lang['mid']+'</p>';
    }
    if(state_info.mo!=0)
    {
      tmp+='<p class="scroll_item2" data-item="2">'+lang['mo']+'</p>';
    }
    if(state_info.me!=0)
    {
      tmp+='<p class="scroll_item3" data-item="3">'+lang['me']+'</p>';
    }
    if(state_info.mso!=0)
    {
      tmp+='<p class="scroll_item4" data-item="4">'+lang['mso']+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['post']);
    $("#action_line_1 .field-right").html(tmp);
    ZP12(cur_min);
  }
  else if(action==13)
  {
    var tmp='<div class="select-input" data-item="'+state_info.entry+'" id="action_field_1"><span class="select-value">'+lang['board_'+state_info.entry]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item0" data-item="0">'+lang['board_0']+'</p>';
    tmp+='<p class="scroll_item1" data-item="1">'+lang['board_1']+'</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['rule']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==14 || action==15)
  {
    var tmp='<div class="select-input" data-item="1" id="action_field_1"><span class="select-value">'+lang['contr_1']+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item1" data-item="1">'+lang['contr_1']+'</p>';
    tmp+='<p class="scroll_item0" data-item="0">'+lang['contr_0']+'</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['rule']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<div class="select-input" data-item="'+states_list[0].id+'" id="action_field_2"><span class="select-value">'+states_list[0].name+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<states_list.length; i++)
    {
      tmp+='<p class="scroll_item'+states_list[i].id+'" data-item="'+states_list[i].id+'">'+states_list[i].name+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['state']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==21|| action==22 || action==23 || action==31 || action==32)
  {
    var tmp='<div class="select-input" data-item="'+region_list[0]+'" id="action_field_1"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['region']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==16 || action==18 || action==19 || action==20)
  {
    var tmp='<div class="select-input" data-item="'+region_list[0]+'" id="action_field_1"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['region']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<input id="action_field_2" type="text" class="input-text hint" value="5">';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['tax_in_proc']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==17)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="5">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['tax_in_proc']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==24)
  {
    var tmp='<div class="select-input zp24" data-item="1" id="action_field_1"><span class="select-value">'+lang['military_base']+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item1" data-item="1">'+lang['military_base']+'</p>';
    tmp+='<p class="scroll_item2" data-item="2">'+lang['university']+'</p>';
    tmp+='<p class="scroll_item3" data-item="3">'+lang['hospital']+'</p>';
    tmp+='<p class="scroll_item4" data-item="4">'+lang['media']+'</p>';
    tmp+='<p class="scroll_item5" data-item="5">'+lang['transportation']+'</p>';
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['building']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<div class="select-input zp24" data-item="'+region_list[0]+'" id="action_field_2"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['region']);
    $("#action_line_2 .field-right").html(tmp);
    ZP24();
  }
  else if(action==25)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="'+state_info.name+'">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['new_name']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==26)
  {

    var tmp='<div class="selected-color"><div class="color-sample color-1" id="action_field_1" data-item="1"></div></div>';
    tmp+='<ul class="color-list">';
    for(var i=0; i<20; i++)
    {
      tmp+='<li data-item="'+(i+1)+'" class="color-sample color-'+(i+1)+'"></li>';
    }
    tmp+='</ul></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['color']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==27)
  {
    var tmp='<div class="select-input zp27" data-item="'+region_list[0]+'" id="action_field_1"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['attacker']);
    $("#action_line_1 .field-right").html(tmp);
    ZP27(region_list[0]);
  }
  else if(action==28)
  {
    var tmp='<div class="select-input" data-item="'+state_info.type+'" id="action_field_1"><span class="select-value">'+lang['state_'+state_info.type]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=1; i<11; i++)
    {
      if(i==8 || i==9)
      {
        continue;
      }
      tmp+='<p class="scroll_item'+states_list[i].id+'" data-item="'+i+'">'+lang['state_'+i]+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['form']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==29)
  {
    var tmp='<div class="select-input" data-item="'+region_list[0]+'" id="action_field_1"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['region']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<div class="select-input" data-item="'+states_list[0].id+'" id="action_field_2"><span class="select-value">'+states_list[0].name+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<states_list.length; i++)
    {
      tmp+='<p class="scroll_item'+states_list[i].id+'" data-item="'+states_list[i].id+'">'+states_list[i].name+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['state']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==33 || action==34 || action==36)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="" placeholder="http://vk.com/aalebedev">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['link']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==35)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="" placeholder="http://vk.com/club74349100">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['link']);
    $("#action_line_1 .field-right").html(tmp);
  }
  else if(action==37)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="'+state_info.proc_head+'">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['head']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<input id="action_field_2" type="text" class="input-text hint" value="'+state_info.proc_vice+'">';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['vice']);
    $("#action_line_2 .field-right").html(tmp);

    tmp='<input id="action_field_3" type="text" class="input-text hint" value="'+state_info.proc_parliament+'">';
    $("#action_line_3").show();
    $("#action_line_3 .label").html(lang['parliament']);
    $("#action_line_3 .field-right").html(tmp);

    tmp='<input id="action_field_4" type="text" class="input-text hint" value="'+state_info.proc_min+'">';
    $("#action_line_4").show();
    $("#action_line_4 .label").html(lang['minister']);
    $("#action_line_4 .field-right").html(tmp);
  }
  else if(action==38)
  {
    var tmp='<div class="select-input" data-item="'+states_list[0].id+'" id="action_field_1"><span class="select-value">'+states_list[0].name+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<states_list.length; i++)
    {
      tmp+='<p class="scroll_item'+states_list[i].id+'" data-item="'+states_list[i].id+'">'+states_list[i].name+'</p>';
    }
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['state']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<div class="select-input" data-item="1" id="action_field_2"><span class="select-value">'+lang['oil']+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    tmp+='<p class="scroll_item1" data-item="1">'+lang['oil']+'</p>';
    tmp+='<p class="scroll_item2" data-item="2">'+lang['ore']+'</p>';
    tmp+='<p class="scroll_item3" data-item="3">'+lang['coal']+'</p>';
    tmp+='<p class="scroll_item4" data-item="4">RUB</p>';
    tmp+='</div></div>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['type']);
    $("#action_line_2 .field-right").html(tmp);

    tmp='<input id="action_field_3" type="text" class="input-text hint" value="1000">';
    $("#action_line_3").show();
    $("#action_line_3 .label").html(lang['count']);
    $("#action_line_3 .field-right").html(tmp);
  }
  else if(action==39)
  {
    var tmp='<div class="select-input" data-item="'+region_list[0]+'" id="action_field_1"><span class="select-value">'+lang['reg_'+region_list[0]]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<region_list.length; i++)
    {
      tmp+='<p class="scroll_item'+region_list[i]+'" data-item="'+region_list[i]+'">'+lang['reg_'+region_list[i]]+'</p>';
    }
    tmp+='</div></div>';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['region']);
    $("#action_line_1 .field-right").html(tmp);

    tmp='<input id="action_field_2" type="text" class="input-text hint" placeholder="http://vk.com/aalebedev" value="">';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['link']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==40)
  {
    var tmp='<input id="action_field_1" type="text" class="input-text hint" value="">';
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['state_name']);
    $("#action_line_1 .field-right").html(tmp);
    var tmp='<span class="line-field">1&thinsp;000&thinsp;000 RUB</span>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['costs']);
    $("#action_line_2 .field-right").html(tmp);
  }
  else if(action==41)
  {
    ZP41();
  }
  if(action>=21 && action<=23)
  {
    var tmp='<span class="line-field">5&thinsp;000&thinsp;000 RUB</span>';
    $("#action_line_2").show();
    $("#action_line_2 .label").html(lang['costs']);
    $("#action_line_2 .field-right").html(tmp);
  }
  if(state_info.type==10 && (state_info.head==id || state_info.vice==id))
  {
    $("#zp_note").html(lang['zp_note']+'<br>'+lang['zp_type_dia']);
  }
  else if(state_info.head==id)
  {
    $("#zp_note").html(lang['zp_note']+'<br>'+lang['zp_type_head']);
  }
  else if(action==2)
  {
    $("#zp_note").html(lang['zp_note']+'<br>'+lang['zp_type_13']);
  }
  else if(action>=16 && action<=24)
  {
    $("#zp_note").html(lang['zp_note']+'<br>'+lang['zp_type_12']);
  }
  else
  {
    $("#zp_note").html(lang['zp_note']+'<br>'+lang['zp_type_23']);
  }
}





var cur_did=0;
function ViewZP(did)
{
  if(cur_did==did)
  {
    return;
  }
  $.post('https://socforge.com/WP/api/ViewZP/?' + RandomGet(), { id: id, key: key, did: did}, function (data) {
    var voted=false;
    var json = jQuery.parseJSON(data);
    var tmp='';
    cur_did=did;

    if(jQuery.inArray(id, json.approves)>-1 || jQuery.inArray(id, json.rejects)>-1 || jQuery.inArray(id, json.refrains)>-1)
    {
      voted=true;
    }

    if(json.response.status==0)
    {
      if(state_info.type==10)
      {
        if((state_info.head==id || state_info.vice==id) && json.response.owner==id)
        {
          tmp+='<p class="vote-block for_zp">'+lang['zp_type_dia']+'</p>'; //dia in progress
        }
        else if(state_info.head==id || state_info.vice==id)
        {
          tmp+='<div class="vote-bttn">';
          tmp+='<button type="button" class="bttn bttn-green" onclick="VoteZP('+did+',1);">'+lang['to_approve']+'</button>';
          tmp+='<button type="button" class="bttn" onclick="VoteZP('+did+',-1);">'+lang['to_reject']+'</button>';
          tmp+='</div>';
        }
        else
        {
          cur_did=0;
          SMessage(lang['not_in_parl']); //other in dia
        }
      }
      else
      {
        if(in_parlament)
        {
          if(!voted) //parliament
          {
            tmp+='<div class="vote-bttn">';
            tmp+='<button type="button" class="bttn bttn-green" onclick="VoteZP('+did+',1);">'+lang['to_approve']+'</button>';
            tmp+='<button type="button" class="bttn" onclick="VoteZP('+did+',-1);">'+lang['to_reject']+'</button>';
            tmp+='<button type="button" class="bttn bttn-blue" onclick="VoteZP('+did+',0);">'+lang['to_refrain']+'</button>';
            tmp+='</div>';
          }
          else
          {
            var nums = (json.approves).concat(json.rejects, json.refrains);
            var sort_arr=nums.sort();
            tmp+='<div class="vote-block">';
            tmp+='<div class="vote">';
            tmp+='<div class="citizens-votes fl"><ul>';
            for(var i=0; i<sort_arr.length; i++)
            {
              if(sort_arr[i]==0)
              {
                continue;
              }
              var tmp_img=data_img['uid_'+sort_arr[i]];
              if(tmp_img===undefined)
              {
                tmp_img="";
                uids_list+=sort_arr[i]+','
              }
              tmp+='<li class="color-'+json.colors[sort_arr[i]]+'"><img id="phi_uid_'+sort_arr[i]+'"  src="'+tmp_img+'" alt=""></li>';
            }
            tmp+='</ul></div><div class="clear"></div></div>';
            tmp+='</div>';
          }
        }
        else if(state_info.head==id)
        {
          if(json.response.sign==1)
          {
            tmp+='<div class="vote-bttn">';
            tmp+='<button type="button" class="bttn bttn-green" onclick="VoteZP('+did+',1);">'+lang['to_approve']+'</button>';
            tmp+='<button type="button" class="bttn" onclick="VoteZP('+did+',-1);">'+lang['to_reject']+'</button>';
            tmp+='</div>';
          }
          else
          {
            cur_did=0;
            SMessage(lang['not_in_parl']); //no parl, no head
          }
        }
        else if(state_info.vice==id)
        {
          var nums = (json.approves).concat(json.rejects, json.refrains);
          var sort_arr=nums.sort();
          tmp+='<div class="vote-block">';
          tmp+='<div class="vote">';
          tmp+='<div class="citizens-votes fl"><ul>';
          for(var i=0; i<sort_arr.length; i++)
          {
            if(sort_arr[i]==0)
            {
              continue;
            }
            var tmp_img=data_img['uid_'+sort_arr[i]];
            if(tmp_img===undefined)
            {
              tmp_img="";
              uids_list+=sort_arr[i]+','
            }
            tmp+='<li class="color-'+json.colors[sort_arr[i]]+'"><img id="phi_uid_'+sort_arr[i]+'"  src="'+tmp_img+'" alt=""></li>';
          }
          tmp+='</ul></div><div class="clear"></div></div>';
          tmp+='</div>';
        }
        else
        {
          cur_did=0;
          SMessage(lang['not_in_parl']); //no parl, no head
        }
      }
    }
    else
    {
      if(in_parlament || state_info.head==id  || state_info.vice==id)
      {
        if(json.response.status>2)
        {
          tmp+='<p class="vote-block against_zp">'+lang['head_zp_lock']+'</p>';
        }
        else if(json.response.limit<2)
        {
          if(json.response.status==1)
          {
            tmp+='<p class="vote-block for_zp">'+lang['head_zp_app']+'</p>';
          }
          else
          {
            tmp+='<p class="vote-block against_zp">'+lang['head_zp_rej']+'</p>';
          }
        }
        else if(json.approves.length>1 || json.rejects.length>1 || json.rejects.length>1)
        {
          var uids_list='';
          if(json.response.status>2)
          {
            tmp+='<p class="vote-block against_zp">'+lang['head_zp_lock']+'</p>';
          }
          else if(json.response.limit<2)
          {
            if(json.response.status==1)
            {
              tmp+='<p class="vote-block for_zp">'+lang['head_zp_app']+'</p>';
            }
            else
            {
              tmp+='<p class="vote-block against_zp">'+lang['head_zp_rej']+'</p>';
            }
          }
          else if(json.approves.length>1 || json.rejects.length>1 || json.rejects.length>1)
          {
            tmp+='<div class="vote-block">';
            if(json.approves.length>1)
            {
              var tmp_proc=((json.approves.length-1)/json.response.limit)*100;
              tmp+='<div class="vote">';
              tmp+='<div class="vote-result for fl">'+lang['zp_app']+': '+tmp_proc+'%</div>';
              tmp+='<div class="citizens-votes fl"><ul>';
              for(var i=0; i<json.approves.length-1; i++)
              {
                var tmp_img=data_img['uid_'+json.approves[i]];
                if(tmp_img===undefined)
                {
                  tmp_img="";
                  uids_list+=json.approves[i]+','
                }
                tmp+='<li class="color-'+json.colors[json.approves[i]]+'"><img id="phi_uid_'+json.approves[i]+'"  src="'+tmp_img+'" alt=""></li>';
                if(i>=15)
                {
                  break;
                }
              }
              tmp+='</ul></div><div class="clear"></div></div>';
            }
            if(json.rejects.length>1)
            {
              var tmp_proc=((json.rejects.length-1)/json.response.limit)*100;
              tmp+='<div class="vote">';
              tmp+='<div class="vote-result against fl">'+lang['zp_rej']+': '+tmp_proc+'%</div>'
              tmp+='<div class="citizens-votes fl"><ul>';
              for(var i=0; i<json.rejects.length-1; i++)
              {
                var tmp_img=data_img['uid_'+json.rejects[i]];
                if(tmp_img===undefined)
                {
                  tmp_img="";
                  uids_list+=json.rejects[i]+','
                }
                tmp+='<li class="color-'+json.colors[json.rejects[i]]+'"><img id="phi_uid_'+json.rejects[i]+'"  src="'+tmp_img+'" alt=""></li>';
                if(i>=15)
                {
                  break;
                }
              }
              tmp+='</ul></div><div class="clear"></div></div>';
            }
            if(json.refrains.length>1)
            {
              var tmp_proc=((json.refrains.length-1)/json.response.limit)*100;
              tmp+='<div class="vote">';
              tmp+='<div class="vote-result abstained fl">'+lang['zp_ref']+': '+tmp_proc+'%</div>';
              tmp+='<div class="citizens-votes fl"><ul>';
              for(var i=0; i<json.refrains.length-1; i++)
              {
                var tmp_img=data_img['uid_'+json.refrains[i]];
                if(tmp_img===undefined)
                {
                  tmp_img="";
                  uids_list+=json.refrains[i]+','
                }
                tmp+='<li class="color-'+json.colors[json.refrains[i]]+'"><img id="phi_uid_'+json.refrains[i]+'"  src="'+tmp_img+'" alt=""></li>';
                if(i>=15)
                {
                  break;
                }
              }
              tmp+='</ul></div><div class="clear"></div></div>';
            }
            tmp+='</div>';
          }
        }
      }
    }

    $(".vote-bttn").remove();
    $(".vote-block").remove();
    $("#zp_item_"+did).append(tmp);

    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#phi_uid_"+data.response[j].id).attr('src', ''+data_img['uid_'+data.response[j].id]);
        }
      });
    }
    api_zp.reinitialise();
  });
}



function VoteZP(did, action)
{
  $.post('https://socforge.com/WP/api/VoteZP/?' + RandomGet(), { id: id, key: key, did: did, action:action}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      cur_did=0;
      SMessage(lang['res_vote_'+action]);
      $(".vote-bttn").remove();
      $(".vote-block").remove();
    }
  });
}

function GenZPText(data, users, states)
{

  var result=lang['action_s_'+data.type];
  if(data.type==3 || data.type==6 || data.type==5)
  {
    result+=' '+data.param1;
  }
  else if(data.type==4 || data.type==17)
  {
    result+=' '+data.param1+'%';
  }
  else if(data.type==9 || data.type==11)
  {
    result+=' '+users[data.param1];
  }
  else if(data.type==10 || data.type==12)
  {
    if(data.param1==1)
    {
      result+=' ('+lang['mid_s']+'): '+data.param3+'';
    }
    else if(data.param1==2)
    {
      result+=' ('+lang['mo_s']+'): '+data.param3+'';
    }
    else if(data.param1==3)
    {
      result+=' ('+lang['me_s']+'): '+data.param3+'';
    }
    else if(data.param1==4)
    {
      result+=' ('+lang['mso_s']+'): '+data.param3+'';
    }
  }
  else if(data.type==9 || data.type==11 || data.type==33 || data.type==34 || data.type==36)
  {
    result+=' '+data.param2+'';
  }
  else if(data.type==13)
  {
    result+=' '+lang['board_'+data.param1];
  }
  else if(data.type==14 || data.type==15)
  {
    result+=' ('+lang['contr_s_'+data.param1]+') '+states[data.param2]+'';
  }
  else if(data.type==16 || data.type==18  || data.type==19  || data.type==20)
  {
    result+=' '+data.param2+'%';
    result+=', '+lang['reg_'+data.param1]+'';
  }
  else if(data.type==21 || data.type==22  || data.type==23)
  {
    result+=' '+lang['reg_'+data.param1]+'';
  }
  else if(data.type==24)
  {
    var tmp_build = ['','military_base','university', 'hospital', 'media', 'transportation'];
    result+=' '+lang['reg_'+data.param2]+' ('+lang[tmp_build[data.param1]]+')';
  }
  else if(data.type==25)
  {
    result+=' '+data.param1;
  }
  else if(data.type==26)
  {
    result+=' <b class="text-color-'+data.param1+'">■</b>';
  }
  else if(data.type==27)
  {
    result+=' '+lang['reg_'+data.param1];
    result+=', '+lang['reg_'+data.param2];
  }
  else if(data.type==28)
  {
    result+=' '+lang['state_'+data.param1];
  }
  else if(data.type==29)
  {
    result+=' '+lang['reg_'+data.param1];
    result+=', '+states[data.param2];
  }
  else if(data.type==30 || data.type==31 || data.type==32)
  {
    result+=' '+lang['reg_'+data.param1];
  }
  else if(data.type==35)
  {
    result+=' http://vk.com/'+data.param1;
  }
  else if(data.type==37)
  {
    result+=' '+data.param1+'%, '+data.param2+'%, '+data.param3+'%, '+data.param4+'%';
  }
  else if(data.type==38)
  {
    result+=' '+states[data.param1];
    var tmp_arr=['', 'oil', 'ore', 'coal'];
    var tmp_0=lang[tmp_arr[data.param2]];
    if(data.param2==4)
    {
      tmp_0='RUB';
    }
    result+=', '+tmp_0+': '+data.param3;
  }
  else if(data.type==37)
  {
    result+=' '+data.param1+'%, '+data.param2+'%, '+data.param3+'%, '+data.param4+'%';
  }
  else if(data.type==38)
  {
    var tmp_keys_resource = ['oil', 'ore', 'coal', 'RUB'];
    lang['RUB']='RUB';
    result+=' '+lang['state_'+data.param1]+': '+data.param3 + ' '+tmp_keys_resource[data.param2-1];
  }
  else if(data.type==39)
  {
    users['0']='---';
    result+=' '+' '+lang['reg_'+data.param1]+': '+users[data.param2];
  }
  else if(data.type==40)
  {
    result+=' '+data.param1;
  }
  else if(data.type==41)
  {
    result+=' '+data.param2;
  }
  else if(data.type==42)
  {
    result+=' '+data.param2;
  }
  return result;
}


function Uprising()
{
  $.post('https://socforge.com/WP/api/Uprising/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      SMessage(lang['you_begin_uprising']);
    }
    else
    {
      if(json.r==-102)
      {
        Error(json.r);
      }
      else
      {
        Error(json.r);
      }
    }
  });
}



function ManParty(pid)
{
  $.post('https://socforge.com/WP/api/ManParty/?' + RandomGet(), { id: id, key: key, pid: pid}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    $("#state_title").html(lang['request_in_party']).after('<div class="back" id="back_state" onclick="Politics();">&lt;</div>');
    var uids_list='';
    var json = jQuery.parseJSON(data);
    var tmp='<div id="party_list" style="left:0; top:0;" class="scroll-pane">';
    for(var i=0; i<json.users.length; i++)
    {
      tmp+='<div class="party_list_item" style="padding: 10px 0 10px 40px;" id="item_user_'+json.users[i].id+'" onclick="ManApproveInParty('+pid+','+json.users[i].id+');">';
      var tmp_img=data_img['uid_'+json.users[i].id];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.users[i].id+','
      }
      tmp+='<div class="party_list_item_photo" id="ph_uid_'+json.users[i].id+'" style="background-image:url('+tmp_img+');"></div>';
      tmp+=json.users[i].name;
      tmp+='</div>';
    }
    tmp+='</div>';
    $("#state_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    $("#polit_content .plus").hide();
    var lock='';
    if(json.party.rang<4)
    {
      lock=' disabled="disabled" ';
    }
    var tmp='<div id="parties_title">'+lang['edit_party']+'</div>';
    tmp+='<table><tr><td>'+lang['name_party']+':</td>';
    tmp+='<td><input type="text" id="party_name" '+lock+' value="'+json.party.name+'"></td></tr>';
    tmp+='<tr><td>'+lang['type_party']+':</td>';
    tmp+='<td><select id="party_views" '+lock+'>';
    for(var i=0; i<=15; i++)
    {
      var selected='';
      if(i==json.party.views)
      {
        selected=' selected'
      }
      tmp+='<option value="'+i+'" '+selected+'>'+lang['polit_'+i]+'</option>';

    }
    tmp+='</select></td></tr>';
    tmp+='<tr><td>'+lang['color_party']+':</td>';
    tmp+='<td><input type="color" id="party_color" '+lock+' value="'+json.party.color+'"></td></tr>';
    tmp+='<tr><td>'+lang['prefix_party']+':</td>';
    tmp+='<td><input type="text" id="party_prefix" '+lock+' value="'+json.party.prefix+'"></td></tr>';
    tmp+='<tr><td>'+lang['vk_group']+':</td>';
    tmp+='<td><input type="url" id="party_vk_link" '+lock+' value="http://vk.com/'+json.party.vk_group+'"></td></tr>';
    tmp+='<tr><td colspan="2"><textarea placeholder="'+lang['info_party']+'" '+lock+' id="party_description">'+json.party.description+'</textarea></td></tr>';
    tmp+='</table>';
    if(json.party.rang==4)
    {
      tmp+='<button id="create_party" style="top: 310px; left: 275px;" onclick="EditParty('+pid+');">'+lang['edit']+'</button>';
    }
    $("#party_content").html(tmp);
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}


function VoteConvert()
{
  var tmp='донат в мп только через браузер.';
  $("#profile_content").hide();
  $("#war_content").hide();
  $("#donate_content").html(tmp).show();
  SetLoc("donate");
}




function GotoVK(link)
{
  newwin = window.open('http://vk.com/' + link, getRandomInt(0, 100000).toString());
  newwin.focus()
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Profile(uid)
{
  HideWindow1();
  if(uid==0)
  {
    uid=id;
  }
  $.post('https://socforge.com/WP/api/Profile/?' + RandomGet(), { id: id, key: key, uid: uid }, function (data) {
    var uid_photo='';
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }
    var tmp='<div class="win-inner"><a onclick="CloseProfile();" class="win-close"></a><div class="win-left fl">';
    var tmp_img=data_img['grand_uid_'+uid];
    if(tmp_img===undefined)
    {
      tmp+='<div id="ph_profile" class="profile-img"></div>';
    }
    else
    {
      tmp+='<div id="ph_profile" class="profile-img" style="background-image:url('+tmp_img+');"></div>';
    }
    if(id==uid)
    {
      //tmp+='<button type="button" class="bttn bttn-red" onclick="ToWall()">'+lang['talk_friends']+'</button>';
    }
    else
    {
      tmp+='<button type="button" class="bttn bttn-green" onclick="SendPMWindow('+uid+',\''+json.user.name+'\')">'+lang['send_message']+'</button>';
    }
    tmp+='<button type="button" class="bttn bttn-blue" onclick="GotoVK(\'id'+uid+'\');">'+lang['page_in_vk']+'</button>';
    tmp+='</div>';
    tmp+='<div class="win-right fr"><div class="profile-info">';
    tmp+='<div class="profile-name">'+json.user.name;
    if(json.user.ban_type>0)
    {
      tmp+='<span class="status" style="color: #f04d4b;d">'+lang['banned']+'</span>';
    }
    else if(json.user.online<300)
    {
      tmp+='<span class="status">online</span>';
    }
    tmp+='</div>';
    if(id==uid)
    {
      if(json.user.message=="")
      {
        tmp+='<p id="profile_message" class="grey" onclick="EditMessageWindow(\'\');">'+lang['set_public_message']+'</p>';
      }
      else
      {
        tmp+='<p id="profile_message" onclick="EditMessageWindow(\''+json.user.message+'\');">'+json.user.message+'</p>';
      }
    }
    else
    {
      tmp+='<p>'+json.user.message+'&nbsp;</p>';
    }
    var tmp_posts='';
    if(uid==id)
    {
      tmp_posts=' <span class="profile-red" onclick="MyPosts();">('+lang['my_posts']+')</span>';
    }
    tmp+='<ul class="profile-list">';
    tmp+='<li><span class="profile-point">'+lang['level']+':</span><span class="profile-black">'+json.user.level+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['region']+':</span><span class="profile-red" onclick="RegionProfile('+json.user.region+');">'+lang['reg_'+json.user.region]+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['nationality']+':</span><span class="profile-red" onclick="StateProfile('+json.user.state+');">'+json.user.state_name+'</span>'+tmp_posts+'</li>';
    if(id==uid)
    {
      tmp+='<li><span class="profile-point">'+lang['visas']+':</span><span class="profile-red" onclick="MyVisa();">'+json.user.visa+'</span></li>';
    }
    else
    {
      tmp+='<li><span class="profile-point">'+lang['visas']+':</span><span class="profile-black">'+json.user.visa+'</span></li>';
    }
    if(json.user.pid>0)
    {
      tmp+='<li><span class="profile-point">'+lang['party']+':</span><span class="profile-red" onclick="PartyProfile('+json.user.pid+');">'+json.user.party_name+'</span></li>';
    }
    else
    {
      tmp+='<li></li>';
    }
    tmp+='</ul></div>';
    var sum_awards=0;
    for(var i=0; i<8; i++)
    {
      sum_awards+=json.user['award_'+(i+1)];
    }
    if(sum_awards>0 || id==uid)
    {
      tmp+='<div class="profile-awards"><p>'+lang['awards']+':</p><ul class="profile-awards-list">';
      var count_award=0;
      for(var i=0; i<8; i++)
      {
        if(json.user['award_'+(i+1)]==0 && id!=uid)
        {
          continue;
        }
        var tmp_class='';
        count_award++;
        tmp+='<li class="profile-awards-item profile-award'+(i+1)+'"><span class="num">'+json.user['award_'+(i+1)]+'</span>';
        var tmp_set='left-tooltip';
        if(count_award>3)
        {
          tmp_set='right-tooltip';
        }
        tmp+='<div class="profile-tooltip '+tmp_set+'">'+lang['award_'+(i+1)]+'<br><br>'+lang['award_'+(i+1)+'_d']+'<i class="try"><i class="inner-try"></i></i></div></li>';

      }
      tmp+='</ul></div>';
    }
    tmp+='</div></div>';
    $("#donate_content").css('display', 'none');
    $("#war_content").css('display', 'none');
    $("#profile_content").html(tmp).css('display', 'block');
    SetLoc("id"+uid);
    if(tmp_img===undefined)
    {
      VK.api("users.get", { user_ids:uid, fields:'photo_200', https:1 }, function (data) {
        data_img['grand_uid_'+data.response[0].id]=data.response[0].photo_200;
        $("#ph_profile").css('background-image', 'url('+data_img['grand_uid_'+data.response[0].id]+')');
      });
    }
  });
}


function VIPInfo()
{
  if(user.vip>0)
  {
    $.post('https://socforge.com/WP/api/VIPInfo/?' + RandomGet(), { id: id, key: key}, function (data) {
      var json = jQuery.parseJSON(data);
      var c = {};
      c.html = lang['vip_info_time']+' <span class="blue">'+ToTime(json.r)+'</span>.';
      c.butt_n = [lang['continue'],lang['buy']];
      c.butt_a = ['','VoteConvert();'];
      c.butt_c = ['white','blue'];
      Window(c);
    });
  }
  else
  {
    VoteConvert();
  }
}


function EditMessageWindow(message)
{
  var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
  tmp+='<h2>'+lang['public_message']+'</h2>';
  tmp+='<div class="create-party-form">';
  tmp+='<div class="field"><textarea id="message_val" class="input-text hint" placeholder="'+lang['public_message']+'" maxlength="150">'+message+'</textarea></div>';
  tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="EditMessage();">'+lang['save']+'</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
}

function EditMessage()
{
  $.post('https://socforge.com/WP/api/EditMessage/?' + RandomGet(), { id: id, key: key, message: $("#message_val").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      //Error(json.r);
    }
    else
    {
      HideWindowCreate();
      Profile(id);
    }
  });
}

function PartyProfile(pid)
{
  $.post('https://socforge.com/WP/api/PartyProfile/?' + RandomGet(), { id: id, key: key, pid: pid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="win-inner"><a onclick="CloseProfile();" class="win-close"></a><div class="win-left fl">';
    var tmp_img=undefined;
    if(tmp_img===undefined)
    {
      tmp+='<div id="ph_profile" class="profile-img"></div>';
    }
    else
    {
      tmp+='<div id="ph_profile" class="profile-img"></div>';
    }

    if(json.party.rang>0)
    {
      tmp+='<button type="button" class="bttn bttn-red" onclick="LeavePartyWindow('+pid+');">'+lang['leave_party']+'</button>';
    }
    else if(json.party.rang==0)
    {
      tmp+='<button type="button" class="bttn bttn-red" onclick="LeaveParty('+pid+');">'+lang['cancel_request']+'</button>';
    }
    else
    {
      tmp+='<button type="button" class="bttn bttn-green" onclick="JoinParty('+pid+');">'+lang['send_request']+'</button>';
    }
    if(json.party.rang>=2)
    {
      tmp+='<button type="button" class="bttn bttn-blue" onclick="SwitchContent(\'party\')">'+lang['manager']+'</button>';
    }
    tmp+='</div>';

    tmp+='<div class="win-right fr"><div class="profile-info">';
    tmp+='<div class="profile-name">'+json.party.name+'</div>';
    tmp+='<p>'+json.party.description+'</p>';
    tmp+='<ul class="profile-list">';
    if(json.party.views!=0)
    {
      tmp+='<li><span class="profile-point">'+lang['views']+':</span><span class="profile-black">'+lang['polit_'+json.party.views]+'</span></li>';
    }
    tmp+='<li><span class="profile-point">'+lang['count_members']+':</span><span class="profile-black">'+json.party.count+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['region']+':</span><span class="profile-red" onclick="RegionProfile('+json.party.region+');">'+lang['reg_'+json.party.region]+'</span></li>';
    if(json.party.head_name!==undefined)
    {
      tmp+='<li><span class="profile-point">'+lang['party_rang_4']+':</span><span class="profile-red" onclick="Profile('+json.party.head_vkid+');">'+json.party.head_name+'</span></li>';
    }
    if(json.party.vice_name!==undefined)
    {
      tmp+='<li><span class="profile-point">'+lang['party_rang_3']+':</span><span class="profile-red" onclick="Profile('+json.party.vice_vkid+');">'+json.party.vice_name+'</span></li>';
    }
    for(var i=0; i<5; i++)
    {
      if(json.party['clerk_name_'+i]!==undefined)
      {
        tmp+='<li><span class="profile-point">'+lang['clerk']+':</span><span class="profile-red" onclick="Profile('+json.party['clerk_vkid_'+i]+');">'+json.party['clerk_name_'+i]+'</span></li>';
      }
    }
    if(json.party.vk_group!='')
    {
      tmp+='<li><span class="profile-point">'+lang['group']+':</span><span class="profile-red" onclick="GotoVK(\''+json.party.vk_group+'\');">http://vk.com/'+json.party.vk_group+'</span></li>';
    }
    tmp+='</ul></div>';
    tmp+='</div></div>';

    $("#profile_content").html(tmp).show();
    SetLoc("pid"+pid);

    if(tmp_img===undefined)
    {
      if(json.party.vk_group!="")
      {
        VK.api("groups.getById", { group_id: json.party.vk_group, fields:'photo_200', https:1 }, function (data) {
          if(data.error==undefined)
          {
            data_img['gid_'+json.party.vk_group]=data.response[0].photo_200;
            $("#ph_profile").css('background-image', 'url('+data_img['gid_'+json.party.vk_group]+')');
          }
        });
      }
    }

  });
}



function RegionProfile(rid)
{
  HideWindow1();
  if(user.step>0)
  {
    if(rid==80 || rid==81 || rid==82)
    {
      rid*=(-1);
    }
  }

  $.post('https://socforge.com/WP/api/RegionProfile/?' + RandomGet(), { id: id, key: key, rid: rid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }
    var tmp='<a onclick="CloseProfile();" class="win-close"></a>';
    tmp+='<div class="region-wrap"><div class="region-left fl"><div class="region-map"><div id="region_map" style="overflow: hidden;"></div>';
    if(user.region==rid)
    {
      tmp+='<p>'+lang['you_there']+'</p>';
    }
    else
    {
      tmp+='<button type="button" class="bttn bttn-green" onclick="TripWindow('+rid+')">'+lang['move_to_region']+'</button>';
    }

    tmp+='</div>';
    if(json.region.owner>0)
    {
      tmp+='<p>'+lang['state']+': <span class="state-name" onclick="StateProfile('+json.region.owner+')">'+json.region.state_name+'</span></p>';
    }
    tmp+='<div class="border"><p>'+lang['border_with']+':</p>';
    var tmp_regions=[];
    for(var i=1; i<11; i++)
    {
      if(json.region['border'+i]!=0)
      {
        tmp_regions.push(json.region['border'+i]);
      }
    }
    try{
      tmp_regions.sort(sortfunction);
    }
    catch(e)
    {

    }


    function sortfunction(a, b){
      return (lang['reg_'+a].length - lang['reg_'+b].length)
    }

    tmp+='<div class="col"><ul>';

    for(var i=0; i<Math.ceil(tmp_regions.length/2); i++)
    {
      tmp+='<li onclick="RegionProfile('+tmp_regions[i]+')">'+lang['reg_'+tmp_regions[i]]+'</li>';
    }
    tmp+='</ul></div>';
    tmp+='<div class="col long"><ul>';
    for(var i=Math.ceil(tmp_regions.length/2); i<tmp_regions.length; i++)
    {
      tmp+='<li onclick="RegionProfile('+tmp_regions[i]+')">'+lang['reg_'+tmp_regions[i]]+'</li>';
    }

    tmp+='</ul></div>';
    tmp+='</div></div>';
    tmp+='<div class="region-right fr">';
    tmp+='<h2 class="region-name">'+lang['reg_'+rid]+'</h2>';
    tmp+='<div class="region-info region-resource">';
    tmp+='<p class="title">'+lang['resourse']+'</p>';
    tmp+='<ul>';
    var tmp_keys_resource = ['oil', 'ore', 'coal']
    for(var i=0; i<3; i++)
    {
      tmp+='<li class="resource-'+tmp_keys_resource[i]+'">';
      tmp+='<div class="point fl">'+lang[tmp_keys_resource[i]]+'</div>';
      tmp+='<div class="progressbar fl" style="width:'+json.region['max_'+tmp_keys_resource[i]]+'px">';
      tmp+='<div class="progress-label"><span>'+json.region['cur_'+tmp_keys_resource[i]]+'</span>/'+json.region['max_'+tmp_keys_resource[i]]+'</div>';
      tmp+='</div><div class="clear"></div></li>';
    }
    tmp+='</ul></div>';
    tmp+='<div class="region-info region-index">';
    tmp+='<p class="title">'+lang['indexes']+'</p>';
    tmp+='<ul>';
    var tmp_keys_indexes = ['war', 'med', 'study', 'smi', 'trans'];
    for(var i=0; i<5; i++)
    {
      tmp+='<li class="index-'+tmp_keys_indexes[i]+'">';
      tmp+='<div class="point fl">'+lang['index_'+tmp_keys_indexes[i]]+'</div>';
      tmp+='<div class="progressbar fl" style="width:180px">';
      tmp+='<div class="progress-label"><span>'+json.region['rang_'+tmp_keys_indexes[i]]+'</span>/10</div>';
      tmp+='</div><div class="clear"></div></li>';
    }
    tmp+='</ul></div>';
    tmp+='<div class="region-info region-taxes">';
    tmp+='<p class="title">'+lang['taxes']+'</p>';
    tmp+='<ul>';
    var tmp_keys_taxes = ['oil', 'ore', 'coal'];
    for(var i=0; i<3; i++)
    {
      tmp+='<li class="taxes-'+tmp_keys_taxes[i]+'">';
      tmp+='<div class="point fl">'+lang[tmp_keys_taxes[i]]+'</div>';
      tmp+='<div class="progressbar fl" style="width:200px">';
      tmp+='<div class="progress-label"><span>'+json.region['tax_'+tmp_keys_taxes[i]]+'%</span></div>';
      tmp+='</div><div class="clear"></div></li>';
    }
    tmp+='<li class="taxes-income">';
    tmp+='<div class="point fl">'+lang['income']+'</div>';
    tmp+='<div class="progressbar fl" style="width:200px">';
    tmp+='<div class="progress-label"><span>'+json.region['tax_cash']+'%</span></div>';
    tmp+='</div><div class="clear"></div></li>';
    tmp+='</ul></div></div></div>';

    $("#donate_content").css('display', 'none');
    $("#profile_content").html(tmp).show();

    if(user.step>0 && rid>=-82 && rid<=-80)
    {
      if(rid==-80)
      {
        json.region.state_regions=[82]
      }
      else if(rid==-82)
      {
        json.region.state_regions=[80]
      }
      else if(rid==-81)
      {
        json.region.state_regions=[];
      }
    }
    if(json.region.state_regions===undefined)
    {
      json.region.state_regions=[];
    }

    MiniMap(Math.abs(rid), json.region.state_regions, 0);



    for(var i=0; i<3; i++)
    {
      $('.resource-'+tmp_keys_resource[i]+' .progressbar').progressbar({
        value: json.region['cur_'+tmp_keys_resource[i]]/json.region['max_'+tmp_keys_resource[i]]*100
      });
    }
    for(var i=0; i<5; i++)
    {
      $('.index-'+tmp_keys_indexes[i]+' .progressbar').progressbar({
        value: json.region['rang_'+tmp_keys_indexes[i]]*10
      });
    }
    for(var i=0; i<3; i++)
    {
      $('.taxes-'+tmp_keys_taxes[i]+' .progressbar').progressbar({
        value: json.region['tax_'+tmp_keys_taxes[i]]*2
      });
    }
    $('.taxes-income .progressbar').progressbar({
      value: json.region['tax_cash']*2
    });
    SetLoc("reg"+rid);

  });
}

function MiniMap(rid, state_regions, rang)
{
  try{
    map.minimap({
      container: document.getElementById('region_map'),
      mainRegNum: rid,
      otherRegsNums: state_regions,
      callback: function() {}
    });
  }
  catch (e)
  {
    if(rang>5)
    {
      return;
    }
    rang++;
    setTimeout(function() { MiniMap(rid, state_regions, rang) }, 300);
  }
}

function SelectRegion(rid)
{
  RegionProfile(rid);
}


function Top(type, subtype, preload)
{
  if(type=="states" && subtype!=-1)
  {
    type='exp';
  }
  if(type=="wars" && subtype!=-2)
  {
    type='exp';
  }
  $.post('https://socforge.com/WP/api/Top/?' + RandomGet(), { id: id, key: key, type: type, subtype: subtype}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="tabsbox"><nav class="tabs main-tabs">';
    var yest_class='';
    var today_class='';
    var all_class='';
    var state_class='';
    var war_class='';
    if(subtype=='1')
    {
      yest_class='cur';
    }
    else if(subtype=='2')
    {
      today_class='cur';
    }
    else if(subtype=='0')
    {
      all_class='cur';
    }
    else if(subtype=='-1')
    {
      state_class='cur';
    }
    else if(subtype=='-2')
    {
      war_class='cur';
    }

    tmp+='<a class="tab-item '+yest_class+'" onclick="Top(\''+type+'\', 1,0)">'+lang['today']+'</a>';
    tmp+='<a class="tab-item '+today_class+'" onclick="Top(\''+type+'\', 2,0)">'+lang['yesterday']+'</a>';
    tmp+='<a class="tab-item '+all_class+'" onclick="Top(\''+type+'\', 0,0)">'+lang['all_time']+'</a>';
    tmp+='<a class="tab-item '+state_class+'" onclick="Top(\'states\', -1,0)">'+lang['states']+'</a>';
    tmp+='<a class="tab-item '+war_class+'" onclick="Top(\'wars\', -2,0)">'+lang['wars']+'</a>';
    tmp+='</nav>';

    tmp+='<div id="tab-today" class="tabinfo off"></div>';
    tmp+='<div id="tab-yesterday" class="tabinfo off"></div>';
    tmp+='<div id="tab-alltime" class="tabinfo">';
    if(subtype==1 || subtype==2)
    {
      tmp+='<ul class="top-awards">';
      tmp+='<li class="top-awards-item top-award-'+type+'_1"><span class="num">1</span><div class="awards-tooltip">';
      tmp+='<p class="title">'+lang['top'].toUpperCase()+' 1</p><p>'+lang['top_'+type+'_1']+'</p>';
      tmp+='</div></li>';
      tmp+='<li class="top-awards-item top-award-'+type+'_2"><span class="num">2&ndash;10</span><div class="awards-tooltip">';
      tmp+='<p class="title">'+lang['top'].toUpperCase()+' 2&ndash;10</p><p>'+lang['top_'+type+'_2']+'</p>';
      tmp+='</div></li>';
      tmp+='<li class="top-awards-item top-award-'+type+'_3"><span class="num">11&ndash;50</span><div class="awards-tooltip">';
      tmp+='<p class="title">'+lang['top'].toUpperCase()+' 11&ndash;50</p><p>'+lang['top_'+type+'_3']+'</p>';
      tmp+='</div></li></ul>';
    }

    if(type!="states" && type!="wars")
    {
      var exp_class='';
      var work_class='';
      var damage_class='';
      if(type=='exp')
      {
        exp_class='cur';
      }
      else if(type=='work')
      {
        work_class='cur';
      }
      else if(type=='damage')
      {
        damage_class='cur';
      }
      tmp+='<nav class="tabs inner-tabs">';
      tmp+='<a class="tab-item '+exp_class+'" onclick="Top(\'exp\', '+subtype+',0)">'+lang['exp']+'<span class="line"></span></a>';
      tmp+='<a class="tab-item '+work_class+'" onclick="Top(\'work\', '+subtype+',0)">'+lang['work']+'<span class="line"></span></a>';
      tmp+='<a class="tab-item '+damage_class+'" onclick="Top(\'damage\', '+subtype+',0)">'+lang['damage']+'<span class="line"></span></a>';
      tmp+='</nav>';
    }
    var uids_list='';
    var states_list='';

    if(type=="states" || type=="wars")
    {
      tmp+='<div id="tab-loss" class="tabinfo inner-tabinfo" style="top: 20px;"><div class="inner-scroll" style="border-bottom:none">';
    }
    else
    {
      tmp+='<div id="tab-loss" class="tabinfo inner-tabinfo"><div class="inner-scroll">';
    }
    tmp+='<div class="scroll-pane" id="top_list_pane"><ul class="top-list">';
    var you_pos='x';
    if(type=="states")
    {
      for (var i = 0; i < json.response.length; i++) {
        var tmp_img=data_img['gid_'+json.response[i].vk_group];
        if(tmp_img===undefined)
        {
          tmp_img="";
          states_list+=json.response[i].vk_group+','
        }

        tmp+='<li class="top-item">';
        tmp+='<span class="top-item-num">'+(i+1)+'</span>';
        tmp+='<span class="top-item-img-state" id="ph_gid_'+json.response[i].vk_group+'" style="background-image:url('+tmp_img+')"></span>';
        tmp+='<span class="top-item-name-state" onclick="StateProfile('+json.response[i].id+')">'+json.response[i].name +'</span>';
        tmp+='<span class="top-item-type-state">'+lang['state_'+json.response[i].type]+'</span>';
        tmp+='</li>';
      }
    }
    else if(type=="wars")
    {
      for (var i = 0; i < json.response.length; i++) {
        tmp+='<li class="top-item">';
        tmp+='<span class="top-item-num">'+(i+1)+'</span>';
        var tmp_name=json.response[i].attacker_name +' '+ lang['and'] +' '+ json.response[i].protecting_name;
        if(json.response[i].attacker_damage<json.response[i].protecting_damage)
        {
          tmp_name=json.response[i].protecting_name +' '+ lang['and'] +' '+ json.response[i].attacker_name;
        }
        if(json.response[i].attacker_id==0)
        {
          tmp_name=lang['uprising']+' '+json.response[i].protecting_name ;
        }
        tmp+='<span class="top-item-name-state" onclick="ShowWar('+json.response[i].id+')" style="width: 350px; margin-left: 20px;">'+tmp_name+'</span>';
        tmp+='<span class="top-item-amount" style="width:80px">'+ToNumber(json.response[i].total_damage) +'</span>';
        tmp+='</li>';
      }
    }
    else
    {
      if(json.you.position<1000)
      {
        you_pos=json.you.position;
      }
      for (var i = 0; i < json.users.length; i++) {
        var tmp_img=data_img['uid_'+json.users[i].id];
        if(tmp_img===undefined)
        {
          tmp_img="";
          uids_list+=json.users[i].id+','
        }
        if(json.users[i].id==id)
        {
          you_pos=i+1;
        }
        tmp+='<li class="top-item">';
        tmp+='<span class="top-item-num">'+(i+1)+'</span>';
        tmp+='<span class="top-item-img" id="ph_uid_'+json.users[i].id+'" style="background-image:url('+tmp_img+')"></span>';
        tmp+='<span class="top-item-name" onclick="Profile('+json.users[i].id+')">'+json.users[i].name +'</span>';
        tmp+='<span class="top-item-state" onclick="StateProfile('+json.users[i].sid+')">'+json.users[i].state +'</span>';
        tmp+='<span class="top-item-amount">'+ToNumber(json.users[i].ratio) +'</span>';
        tmp+='</li>';
      }
    }
    tmp += '</ul></div></div>';
    if(type=="states" || type=="wars")
    {
    }
    else
    {
      tmp+='<div class="top-item top-main">';
      tmp+='<span class="top-item-num">'+you_pos+'</span>';
      tmp+='<span class="top-item-img" style="background-image:'+$('#user_photo').css('background-image')+'"></span>';
      tmp+='<span class="top-item-name">'+json.you.name +'</span>';
      tmp+='<span class="top-item-state">'+json.you.state +'</span>';
      tmp+='<span class="top-item-amount">'+ToNumber(json.you.ratio) +'</span>';
      tmp+='</div>';
    }
    tmp+='</div>';
    tmp+='</div></div>';
    top_content.html(tmp);

    $('#top_list_pane').jScrollPane({ showArrows: true, contentWidth: 380 });
    if(preload==0)
    {
      SetLoc("top");
      if(uids_list!=='')
      {
        VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
          for(var j=0; j<data.response.length; j++)
          {
            data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
            $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
          }
        });
      }
      if(states_list!=='')
      {
        VK.api("groups.getById", { group_ids: states_list, fields:'photo_50', https:1 }, function (data) {
          for(var j=0; j<data.response.length; j++)
          {
            data_img['gid_'+data.response[j].screen_name]=data.response[j].photo_50;
            $("#ph_gid_"+data.response[j].screen_name).css('background-image', 'url('+data_img['gid_'+data.response[j].screen_name]+')');
          }
        });
      }
    }
  });
}


function StateProfile(sid)
{
  HideWindow1();
  $.post('https://socforge.com/WP/api/StateProfile/?' + RandomGet(), { id: id, key: key, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }

    var tmp='<div class="win-inner"><a onclick="CloseProfile();" class="win-close"></a><div class="win-left fl">';
    var tmp_img=data_img['gid_'+json.state.vk_group];
    if(tmp_img===undefined)
    {
      tmp+='<div id="ph_profile" class="state-img"></div>';
    }
    else
    {
      tmp+='<div id="ph_profile" class="state-img" style="background-image:url('+tmp_img+');"></div>';
    }
    if(user.state!=sid)
    {
      if(json.state.request_visa==0)
      {
        tmp+='<button type="button" class="bttn bttn-green" onclick="StateApp(2, '+sid+');">'+lang['request_visa']+'</button>';
      }
      else
      {
        tmp+='<button type="button" class="bttn bttn-red" onclick="StateAppCancel(2, '+sid+');">'+lang['request_visa_cancel']+'</button>';
      }
      if(json.state.request_state==0)
      {
        tmp+='<button type="button" class="bttn bttn-green" onclick="StateApp(1, '+sid+');">'+lang['request_nationality']+'</button>';
      }
      else
      {
        tmp+='<button type="button" class="bttn bttn-red" onclick="StateAppCancel(1, '+sid+');">'+lang['request_nationality_cancel']+'</button>';
      }
      if(json.state.mid==0 && sid!=13 && sid!=14)
      {
        tmp+='<button type="button" class="bttn bttn-green" onclick="BuyNationalityWindow('+sid+','+json.state.regions+');">'+lang['buy_nationality']+'</button>';
      }
    }
    if(json.state.vk_group!="")
    {
      tmp+='<button type="button" class="bttn bttn-blue" onclick="GotoVK(\''+json.state.vk_group+'\');">'+lang['page_in_vk']+'</button>';
    }
    tmp+='</div>';
    tmp+='<div class="win-right fr"><div class="profile-info">';
    tmp+='<div class="profile-name">'+json.state.name+'</div>';
    tmp+='<ul class="profile-state-list">';
    tmp+='<li><span class="profile-point">'+lang['type_form']+':</span><span class="profile-black">'+lang['state_'+json.state.type]+'</span></li>';
    if(json.state.union!=0)
    {
      tmp+='<li><span class="profile-point">'+lang['union_2']+':</span><span class="profile-red" onclick="UnionProfile('+json.state.union+');">'+json.state.union_name+'</span></li>';
    }
    tmp+='<li><span class="profile-point">'+lang['capital']+':</span><span class="profile-red" onclick="RegionProfile('+json.state.capital+');">'+lang['reg_'+json.state.capital]+'</span></li>';
    if(json.state.head>0)
    {
      tmp+='<li><span class="profile-point">'+lang['head']+':</span><span class="profile-red" onclick="Profile('+json.state.head+');">'+json.state.head_name+'</span> <span class="profile-red" onclick="Ministers('+sid+');">('+lang['more_info'].toLowerCase()+')</span></li>';
    }
    if(json.state.parliament!=undefined && json.state.type!=10 && json.state.type!=1 )
    {
      tmp+='<li><span class="profile-point">'+lang['parliament']+':</span><span class="profile-black">'+json.state.parliament.length+' '+lang['places']+'</span></li>';
    }

    var people_count=json.state.people;
    if(people_count>100)
    {
      var filter = Math.pow(10, json.state.people.toString().length-1)/2;
      people_count = lang['near']+' '+(~~(people_count/filter))*filter;
    }
    else
    {
      people_count = lang['less']+' '+100;
    }
    tmp+='<li><span class="profile-point">'+lang['people']+':</span><span class="profile-black">'+people_count+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['regions']+':</span><span class="profile-black">'+json.state.regions+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['parties']+':</span><span class="profile-red" onclick="PartiesInState('+sid+')">'+json.state.parties+'</span></li>';
    // tmp+='<li><span class="profile-point">'+lang['tax_sell']+':</span><span class="profile-black">'+json.state.tax_sell+'%</span></li>';
    if(json.state.cash!=undefined)
    {
      tmp+='<li><span class="profile-point">'+lang['treasure']+':</span><span class="profile-black">'+ToNumber(json.state.cash)+'</span></li>';
      tmp+='<li><span class="profile-point">'+lang['oil']+':</span><span class="profile-black">'+ToNumber(json.state.oil)+'</span></li>';
      tmp+='<li><span class="profile-point">'+lang['ore']+':</span><span class="profile-black">'+ToNumber(json.state.ore)+'</span></li>';
      tmp+='<li><span class="profile-point">'+lang['coal']+':</span><span class="profile-black">'+ToNumber(json.state.coal)+'</span></li>';
    }
    tmp+='</ul></div>';
    tmp+='</div></div>';

    $("#donate_content").css('display', 'none');
    $("#profile_content").html(tmp).show();

    if(json.state.vk_group!="")
    {
      VK.api("groups.getById", { group_id: json.state.vk_group, fields:'photo_200', https:1 }, function (data) {
        if(data.error==undefined)
        {
          data_img['gid_'+json.state.vk_group]=data.response[0].photo_200;
          $("#ph_profile").css('background-image', 'url('+data_img['gid_'+json.state.vk_group]+')');
        }
      });
    }
    SetLoc("state"+sid);
  });
}


function UnionProfile(uid)
{
  HideWindow1();
  $.post('https://socforge.com/WP/api/UnionProfile/?' + RandomGet(), { id: id, key: key, uid: uid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }

    var tmp='<div class="win-inner"><a onclick="CloseProfile();" class="win-close"></a><div class="win-left fl">';
    var tmp_img=data_img['gid_'+json.union.vk_group];
    if(tmp_img===undefined)
    {
      tmp+='<div id="ph_profile" class="state-img"></div>';
    }
    else
    {
      tmp+='<div id="ph_profile" class="state-img" style="background-image:url('+tmp_img+');"></div>';
    }
    if(json.union.vk_group!="")
    {
      tmp+='<button type="button" class="bttn bttn-blue" onclick="GotoVK(\''+json.union.vk_group+'\');">'+lang['page_in_vk']+'</button>';
    }
    tmp+='</div>';
    tmp+='<div class="win-right fr"><div class="profile-info">';
    tmp+='<div class="profile-name">'+json.union.name+'</div>';
    tmp+='<ul class="profile-state-list">';
    tmp+='<li><span class="profile-point">'+lang['count_members']+':</span><span class="profile-red" onclick="UnionList('+uid+')">'+json.union.members+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['rules']+':</span><span class="profile-red" onclick="RulesUnion('+uid+')">'+lang['add_info']+'</span></li>';
    tmp+='</ul></div>';
    tmp+='</div></div>';
    tmp_rules=json.union.rules;

    $("#donate_content").css('display', 'none');
    $("#profile_content").html(tmp).show();

    if(json.union.vk_group!="")
    {
      VK.api("groups.getById", { group_id: json.union.vk_group, fields:'photo_200', https:1 }, function (data) {
        if(data.error==undefined)
        {
          data_img['gid_'+json.union.vk_group]=data.response[0].photo_200;
          $("#ph_profile").css('background-image', 'url('+data_img['gid_'+json.union.vk_group]+')');
        }
      });
    }
    SetLoc("union"+uid);
  });
}

var tmp_rules='';
function RulesUnion(uid)
{
  var tmp='<div class="win" id="win-message"><div class="win-inner"><a class="win-close" onclick="HideWindowPM()"></a><p class="sender-name">'+lang['rules']+'</p>';
  tmp+='<div class="message-form"><textarea class="input-text hint" data-hint="" value="" id="pm_message" style="height: 165px;" disabled>'+tmp_rules+'</textarea>';
  tmp+='</div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
  $("#pm_message").focus();
}

function Ministers(sid) {
  $.post('https://socforge.com/WP/api/Ministers/?' + RandomGet(), { id: id, key: key, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    var c = {};
    var tmp='';
    tmp+='<ul class="profile-state-list" style="text-align: left; margin-left: 100px;">';
    if(json.state.head>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['head_'+json.state.type]+':</span><span class="profile-red" onclick="Profile('+json.state.head+');">'+json.state.head_name+'</span></li>';
    }
    if(json.state.vice>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['vice_'+json.state.type]+':</span><span class="profile-red" onclick="Profile('+json.state.vice+');">'+json.state.vice_name+'</span></li>';
    }
    if(json.state.mid>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['mid_s']+':</span><span class="profile-red" onclick="Profile('+json.state.mid+');">'+json.state.mid_name+'</span></li>';
    }
    if(json.state.mo>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['mo_s']+':</span><span class="profile-red" onclick="Profile('+json.state.mo+');">'+json.state.mo_name+'</span></li>';
    }
    if(json.state.mso>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['mso_s']+':</span><span class="profile-red" onclick="Profile('+json.state.mso+');">'+json.state.mso_name+'</span></li>';
    }
    if(json.state.me>0)
    {
      tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['me_s']+':</span><span class="profile-red" onclick="Profile('+json.state.me+');">'+json.state.me_name+'</span></li>';
    }
    tmp+='</ul></div>';
    c.html = tmp;
    c.butt_n = [lang['continue']];
    c.butt_a = [''];
    c.butt_c = ['blue'];
    Window(c);
  });
}


function MyPosts() {
  $.post('https://socforge.com/WP/api/MyPosts/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.response.length==0)
    {
      SMessage(lang['no_my_posts']);
      return;
    }
    var c = {};
    var tmp='';
    tmp+='<ul class="profile-state-list" style="text-align: left; margin-left: 100px;">';
    for(var i=0; i<json.response.length; i++)
    {
      if(json.response[i].post =="head" || json.response[i].post =="vice")
      {
        tmp+='<li><span class="profile-point" style="width: 150px;">'+lang[json.response[i].post +'_'+json.response[i].type]+':</span><span class="profile-red" onclick="StateProfile('+json.response[i].sid+');">'+json.response[i].state_name+'</span></li>';
      }
      else if(json.response[i].post =="head_region")
      {
        tmp+='<li><span class="profile-point" style="width: 150px;">'+lang['action_s_39']+'</span><span class="profile-red" onclick="RegionProfile('+json.response[i].sid+');">'+lang['reg_'+json.response[i].sid]+'</span></li>';

      }
      else
      {
        tmp+='<li><span class="profile-point" style="width: 150px;">'+lang[json.response[i].post+'_s']+':</span><span class="profile-red" onclick="StateProfile('+json.response[i].sid+');">'+json.response[i].state_name+'</span></li>';
      }
    }
    tmp+='</ul></div>';
    c.html = tmp;
    c.butt_n = [lang['continue']];
    c.butt_a = [''];
    c.butt_c = ['blue'];
    Window(c);
  });
}

function BuyNationalityWindow(sid, count)
{
  var tmp_price='50 G'
  if(count<=5)
  {
    tmp_price='20G';
  }
  var c = {};
  c.html = lang['buy_nationality_text'].replace('%s','<span class="blue">'+tmp_price+'</span>');
  c.butt_n = [lang['cancel'], lang['buy']];
  c.butt_a = ['','BuyNationality('+sid+');'];
  c.butt_c = ['white', 'green'];
  Window(c);
}

function BuyNationality(sid)
{
  $.post('https://socforge.com/WP/api/BuyNationality/?' + RandomGet(), { id: id, key: key, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      SMessage(lang['you_buy_nationality']);
      StateProfile(sid);
    }
  });
}

function StateApp(type, sid)
{
  $.post('https://socforge.com/WP/api/StateApp/?' + RandomGet(), { id: id, key: key, type: type, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      SMessage(lang['you_send_app']);
      StateProfile(sid);
    }
  });
}

function StateAppCancel(type, sid)
{
  $.post('https://socforge.com/WP/api/StateAppCancel/?' + RandomGet(), { id: id, key: key, type: type, sid: sid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      StateProfile(sid);
    }
  });
}

function CloseProfile()
{
  $("#profile_content").css('display', 'none');
}

function CloseDonate()
{
  $("#donate_content").css('display', 'none');
}


function JoinParty(pid)
{
  $.post('https://socforge.com/WP/api/JoinParty/?' + RandomGet(), { id: id, key: key, pid: pid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      PartyProfile(pid);
      CheckStep(9);
    }
    else
    {
      Error(json.r);
    }
  });
}

function LeavePartyWindow(pid)
{
  var c = {};
  c.html = lang['you_want_leave_party'];
  c.butt_n = [lang['cancel'], lang['leave_party']];
  c.butt_a = ['','LeaveParty('+pid+');'];
  c.butt_c = ['white', 'red'];
  Window(c);
}



function HideWindow2()
{
  win_2_but.css('display', 'none').css('margin-top', '');
  win_layer.css('display', 'none');
}

function HideWindow1()
{
  win_1_but.css('display', 'none');
  win_layer.css('display', 'none');
}

function HideWindowCreate()
{
  $("#win-create").remove();
  win_layer.css('display', 'none');
}

function HideWindowPM()
{
  $("#win-message").remove();
  win_layer.css('display', 'none');
}

function TestWin()
{
  var c = {};
  c.html = lang['you_want_leave_party'];
  c.butt_n = [lang['leave_party']];
  c.butt_c = ['blue'];
  c.butt_a = [''];
  Window(c);
}

function Window(obj)
{
  var tmp='<p>'+obj.html+'</p>';
  if(obj.butt_n.length==1)
  {
    tmp+='<button class="bttn bttn-'+obj.butt_c[0]+'" onclick="HideWindow1();'+obj.butt_a[0]+'">'+obj.butt_n[0]+'</button>';
    win_1_but.html(tmp).css('display', 'block');
  }
  else if(obj.butt_n.length==2)
  {
    tmp+='<button class="bttn bttn-'+obj.butt_c[0]+'" onclick="HideWindow2();'+obj.butt_a[0]+'">'+obj.butt_n[0]+'</button>';
    tmp+='<button class="bttn bttn-'+obj.butt_c[1]+'" onclick="HideWindow2();'+obj.butt_a[1]+'">'+obj.butt_n[1]+'</button>';
    win_2_but.html(tmp).css('display', 'block');
  }
  else
  {
    win_1_but.html(tmp).css('display', 'block');
  }
  win_layer.css('display', 'block');
}




function LeaveParty(pid)
{
  $.post('https://socforge.com/WP/api/LeaveParty/?' + RandomGet(), { id: id, key: key, pid: pid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      PartyProfile(pid);
    }
    else
    {
      Error(json.r);
    }
  });
}

var data_img={};


function RequestInParty(pid)
{
  $.post('https://socforge.com/WP/api/RequestInParty/?' + RandomGet(), { id: id, key: key, pid: pid }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    var uids_list='';
    tmp+='<div class="members-wrap"><h2>'+lang['party_members']+' ';
    tmp+='</h2>';
    tmp+='<div class="members-bttn">';
    tmp+='<button class="bttn bttn-blue" onclick="Party();">'+lang['request_in_party']+'</button>';
    tmp+='</div><div class="member-block scroll-pane"><ul class="members-list">';
    var in_parl=0;
    for(var i=0; i<json.users.length; i++)
    {
      var tmp_img=data_img['uid_'+json.users[i].id];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.users[i].id+','
      }
      tmp+='<li class="member-item" id="uid_'+json.users[i].id+'"><div class="member-img fl" id="ph_uid_'+json.users[i].id+'" style="background-image:url('+tmp_img+');" onclick="Profile('+json.users[i].id+');"></div><div class="member-info fl">';
      tmp+='<p class="member-name">'+json.users[i].name+'</p>';
      tmp+='<p class="member-position">'+lang['party_rang_0']+'</p>';
      tmp+='<p class="member-level">'+json.users[i].level+' '+lang['level'].toLowerCase()+'</p>';
      tmp+='</div>';
      tmp+='<div class="member-actions fl" style="display:block"><button class="bttn bttn-green" onclick="SetRangParty('+pid+','+json.users[i].id+',1,-1);">'+lang['approve']+'</button><button class="bttn bttn-red" onclick="SetRangParty('+pid+','+json.users[i].id+',0,-1);">'+lang['reject']+'</button></div>';
      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div></div>';
    $("#party_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}


function ManUserInParty(pid, uid, status, parliament)
{
  if(user.party_rang<3)
  {
    return;
  }

  $(".member-item ").removeClass('cur');
  $("#uid_"+uid).addClass('cur');
  $(".member-actions").remove();
  var panel="<div class=\"member-actions fl\">";
  if(user.party_rang==4)
  {
    if(user.type_state>=4 && user.type_state<=6)
    {
      if(user.candidate!=uid)
      {
        panel+='<p onclick="SetPresident('+pid+','+uid+','+status+',1);">'+lang['to_president']+'</p>';
      }
      else
      {
        panel+='<p onclick="SetPresident('+pid+','+uid+','+status+',0);">'+lang['from_president']+'</p>';
      }
    }
    if(user.type_state>=2 && user.type_state<=7)
    {
      if(parliament==0)
      {
        panel+='<p onclick="SetParliament('+pid+','+uid+','+status+',1);">'+lang['to_parliament']+'</p>';
      }
      else
      {
        panel+='<p onclick="SetParliament('+pid+','+uid+','+status+',0);">'+lang['from_parliament']+'</p>';
      }
    }
    if(status<4)
    {
      panel+='<p onclick="SetRangPartyWindow('+pid+','+uid+',4,'+parliament+');">'+lang['give_powers']+'</p>';
    }
    if(status==1 || status==2)
    {
      panel+='<p onclick="SetRangParty('+pid+','+uid+',3,'+parliament+');">'+lang['do_vice']+'</p>';
    }
    else if(status==3)
    {
      panel+='<p onclick="SetRangParty('+pid+','+uid+',1,'+parliament+');">'+lang['del_vice']+'</p>';
    }
  }
  if(status==1)
  {
    panel+='<p onclick="SetRangParty('+pid+','+uid+',2,'+parliament+');">'+lang['do_clerk']+'</p>';
  }
  else if(status==2)
  {
    panel+='<p onclick="SetRangParty('+pid+','+uid+',1,'+parliament+');">'+lang['del_clerk']+'</p>';
  }
  if(uid!=id && status!=4)
  {
    panel+='<p onclick="SetRangParty('+pid+','+uid+',0,'+parliament+');">'+lang['del_from_party']+'</p>';
  }
  panel+='</div>';
  $("#uid_"+uid+" .member-info").after(panel);
  api_party.reinitialise();
}

function SetRangPartyWindow(pid,uid,rang,parliament)
{
  var c = {};
  c.html = lang['you_want_give_rights'];
  c.butt_n = [lang['cancel'],lang['give_powers']];
  c.butt_a = ['','SetRangParty('+pid+','+uid+','+rang+','+parliament+');'];
  c.butt_c = ['white','red'];
  Window(c);
}

function SetParliament(pid, uid, status, action)
{
  $.post('https://socforge.com/WP/api/SetParliament/?' + RandomGet(), { id: id, key: key, pid: pid, uid: uid, action:action }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      if(action==1)
      {
        ManUserInParty(pid, uid, status, 1);
        $("#uid_"+uid+" .member-info").attr("onclick",'ManUserInParty('+pid+','+uid+',' +status+','+ 1+');');
        $("#uid_"+uid).addClass('parl');
        $("#in_parl").html(($("#in_parl").html()-0)+1);

      }
      else
      {
        ManUserInParty(pid, uid, status, 0);
        $("#uid_"+uid+" .member-info").attr("onclick",'ManUserInParty('+pid+','+uid+',' +status+','+ 0+');');
        $("#uid_"+uid).removeClass('parl');
        $("#in_parl").html(($("#in_parl").html()-0)-1);
      }
    }
  });
}



function SetRangParty(pid, uid, rang, parliament)
{
  $.post('https://socforge.com/WP/api/SetRangParty/?' + RandomGet(), { id: id, key: key, pid: pid, uid: uid, rang:rang }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {
      if(parliament==-1)
      {
        if(rang!=0)
        {
          SMessage(lang['you_add_in_party']);
          $("#uid_"+uid).remove();

        }
        else
        {
          SMessage(lang['you_not_add_in_party']);
          $("#uid_"+uid).remove();
        }
      }
      else
      {
        if(rang!=0)
        {
          SMessage(lang['you_change_in_party']);
          $("#uid_"+uid).attr("onclick",'ManUserInParty('+pid+','+uid+',' +rang+','+ parliament+');');
          $("#uid_"+uid+' .member-position').html(lang['party_rang_'+rang]);
          ManUserInParty(pid, uid, rang, parliament);
          if(rang==4)
          {
            $("#uid_"+id+' .member-position').html(lang['party_rang_3']);
          }
        }
        else
        {
          SMessage(lang['you_del_in_party']);
          $("#uid_"+uid).remove();
          StateInfo();
        }
      }
    }
  });
}

function NewStateWindow(code)
{
  var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
  tmp+='<h2>'+lang['creating_state']+'</h2>';
  tmp+='<div class="create-party-form">';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['state_name']+'</label>';
  tmp+='<div class="field-right fr"><input type="text" id="state_name" class="input-text hint" value="" data-hint="" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['form_state']+'</label>';
  tmp+='<div class="field-right fr"><div class="select-input" data-item="1" id="state_type"><span class="select-value">'+lang['state_1']+'</span><span class="arrow"><i class="try"></i></span></div>';
  tmp+='<div class="select-list"><div class="scroll-pane">';
  for(var i=1; i<11; i++)
  {
    if(i==8 || i==9)
    {
      continue;
    }
    tmp+='<p class="scroll_item'+i+'" data-item="'+i+'">'+lang['state_'+i]+'</p>';
  }
  tmp+='</div></div></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field">';
  tmp+='<p class="label field-left fl">'+lang['state_color']+'</p>';
  tmp+='<div class="field-right fr"><div class="selected-color"><div class="color-sample color-1" id="state_color" data-item="1"></div></div>';
  tmp+='<ul class="color-list">';
  for(var i=0; i<20; i++)
  {
    tmp+='<li data-item="'+(i+1)+'" class="color-sample color-'+(i+1)+'"></li>';
  }
  tmp+='</ul></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
  tmp+='<div class="field-right fr"><input type="text" id="state_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button>';
  if(code==-190)
  {
    tmp+='<button class="bttn bttn-green" onclick="NewState();">'+lang['create']+'</button>';
  }
  else
  {
    tmp+='<button class="bttn bttn-green" onclick="NewState();">'+lang['create']+' (250&thinsp;G)</button>';
  }

  tmp+='</div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
}


function NewPartyWindow()
{
  if(user.level<10)
  {
    Error(198);
    return;
  }
  var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
  tmp+='<h2>'+lang['creating_party']+'</h2>';
  tmp+='<div class="create-party-form">';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['name_party']+'</label>';
  tmp+='<div class="field-right fr"><input type="text" id="party_name" class="input-text hint" value="" data-hint="" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['type_party']+'</label>';
  tmp+='<div class="field-right fr"><div class="select-input" data-item="4" id="party_views"><span class="select-value">'+lang['polit_4']+'</span><span class="arrow"><i class="try"></i></span></div>';
  tmp+='<div class="select-list"><div class="scroll-pane">';
  for(var i=0; i<=15; i++)
  {
    tmp+='<p class="scroll_item'+i+'" data-item="'+i+'">'+lang['polit_'+i]+'</p>';
  }
  tmp+='</div></div></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field">';
  tmp+='<p class="label field-left fl">'+lang['color_party']+'</p>';
  tmp+='<div class="field-right fr"><div class="selected-color"><div class="color-sample color-1" id="party_color" data-item="1"></div></div>';
  tmp+='<ul class="color-list">';
  for(var i=0; i<20; i++)
  {
    tmp+='<li data-item="'+(i+1)+'" class="color-sample color-'+(i+1)+'"></li>';
  }
  tmp+='</ul></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field">';
  tmp+='<p class="label field-left fl">'+lang['prefix_party']+'</p>';
  tmp+='<div class="field-right fr"><input type="text" id="party_prefix" class="input-text hint" value="" placeholder="BOT" maxlength="6"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
  tmp+='<div class="field-right fr"><input type="text" id="party_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><textarea id="party_description" class="input-text hint" placeholder="'+lang['info_party']+'" maxlength="150"></textarea></div>';
  tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="NewParty();">'+lang['create']+' (100&thinsp;G)</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
}


function EditPartyWindow(pid)
{
  $.post('https://socforge.com/WP/api/PartyProfile/?' + RandomGet(), { id: id, key: key, pid: pid}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
    tmp+='<h2>'+lang['edit_party']+'</h2>';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['name_party']+'</label>';
    tmp+='<div class="field-right fr"><input type="text" id="party_name" class="input-text hint" value="'+json.party.name+'" data-hint="" maxlength="30"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['type_party']+'</label>';
    tmp+='<div class="field-right fr"><div class="select-input" data-item="'+json.party.views+'" id="party_views"><span class="select-value">'+lang['polit_'+json.party.views]+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<=15; i++)
    {
      tmp+='<p class="scroll_item'+i+'" data-item="'+i+'">'+lang['polit_'+i]+'</p>';
    }
    tmp+='</div></div></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field">';
    tmp+='<p class="label field-left fl">'+lang['color_party']+'</p>';
    tmp+='<div class="field-right fr"><div class="selected-color"><div class="color-sample color-'+json.party.color+'" id="party_color" data-item="'+json.party.color+'"></div></div>';
    tmp+='<ul class="color-list">';
    for(var i=0; i<20; i++)
    {
      tmp+='<li data-item="'+(i+1)+'" class="color-sample color-'+(i+1)+'"></li>';
    }
    tmp+='</ul></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field">';
    tmp+='<p class="label field-left fl">'+lang['prefix_party']+'</p>';
    tmp+='<div class="field-right fr"><input type="text" id="party_prefix" class="input-text hint" value="'+json.party.prefix+'" placeholder="BOT" maxlength="6"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
    if(json.party.vk_group!='')
    {
      tmp+='<div class="field-right fr"><input type="text" id="party_vk_link" class="input-text hint" value="http://vk.com/'+json.party.vk_group+'" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    else
    {
      tmp+='<div class="field-right fr"><input type="text" id="party_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><textarea id="party_description" class="input-text hint" placeholder="'+lang['info_party']+'" maxlength="150">'+json.party.description+'</textarea></div>';
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="EditParty('+pid+');">'+lang['save']+'</button></div></div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');
  });
}

$('.select-input').live('click', function(){
  if($(this).next().css('display')=='none')
  {
    $(".select-list").css('display', 'none');
    var select=$(this).next();
    select.css('display', 'block')
    var element = select.children('.scroll-pane').jScrollPane({showArrows: false});
    var api = element.data('jsp');
    api.destroy();
    element = select.children('.scroll-pane').jScrollPane({showArrows: false});
    api = element.data('jsp');
    api.scrollToElement(select.find('.scroll_item'+$(this).data('item')).first(), false);
  }
  else
  {
    $(".select-list").css('display', 'none');
  }
});

$('.select-list p').live('click', function(){
  var $field = $(this);
  var parent=$(this).parents('.select-list').prev();
  parent.children('.select-value').html($(this).html());
  parent.data('item', $(this).data('item')).attr('data-item', $(this).data('item'));
  $(this).parents('.select-list').hide();

  if(parent.attr('id')=="type_zp")
  {
    ReloadZP($(this).data('item'));
  }
  if(parent.hasClass('zp12'))
  {
    ZP12($(this).data('item'));
  }
  else if(parent.hasClass('zp24'))
  {
    ZP24();
  }
  else if(parent.hasClass('zp27'))
  {
    ZP27($(this).data('item'));
  }
  else if(parent.hasClass('zp41'))
  {
    ZP41();
  }
});


function ZP41()
{
  $.post('https://socforge.com/WP/api/Unions/?' + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="select-input" data-item="'+json.unions[0].id+'" id="action_field_1"><span class="select-value">'+json.unions[0].name+'</span><span class="arrow"><i class="try"></i></span></div>';
    tmp+='<div class="select-list"><div class="scroll-pane">';
    for(var i=0; i<json.unions.length; i++)
    {
      tmp+='<p class="scroll_item'+json.unions[i].id+'" data-item="'+json.unions[i].id+'">'+json.unions[i].name+'</p>';
    }
    $("#action_line_1").show();
    $("#action_line_1 .label").html(lang['name']);
    $("#action_line_1 .field-right").html(tmp);
  });
}

function ZP24()
{
  $.post('https://socforge.com/WP/api/BuildPrice/?' + RandomGet(), { id: id, key: key, type: $( "#action_field_1").data('item'), rid: $( "#action_field_2").data('item')}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    $("#action_line_4").show();
    $("#action_line_4 .label").html(lang['price']);
    var tmp_class='';
    if(json.response.price_cash>state_info.cash)
    {
      tmp_class='red';
    }
    tmp+='<table style="width:100%">';
    tmp+='<tr class="line-field '+tmp_class+'"><td>RUB</td><td>'+ToNumber(json.response.price_cash) +'/'+ ToNumber(state_info.cash)+'</td></tr>';
    tmp_class='';
    if(json.response.price_oil>state_info.oil)
    {
      tmp_class='red';
    }
    tmp+='<tr class="line-field '+tmp_class+'"><td>'+lang['oil']+'</td><td>'+ToNumber(json.response.price_oil) +'/'+ ToNumber(state_info.oil)+'</td></tr>';
    tmp_class='';
    if(json.response.price_oil>state_info.ore)
    {
      tmp_class='red';
    }
    tmp+='<tr class="line-field '+tmp_class+'"><td>'+lang['ore']+'</td><td>'+ToNumber(json.response.price_oil) +'/'+ ToNumber(state_info.ore)+'</td></tr>';
    tmp_class='';
    if(json.response.price_oil>state_info.coal)
    {
      tmp_class='red';
    }
    tmp+='<tr class="line-field '+tmp_class+'"><td>'+lang['coal']+'</td><td>'+ToNumber(json.response.price_oil) +'/'+ ToNumber(state_info.coal)+'</td></tr>';
    tmp+='</table>';
    $("#action_line_4 .field-right").html(tmp);
  });
}

function ZP12(mid)
{
  var tmp='';
  $("#action_line_2").show();
  $("#action_line_2 .label").html(lang['minister']);
  if(mid==1)
  {
    tmp='<span class="line-field">'+state_info.mid_name+'</span>';
  }
  else if(mid==2)
  {
    tmp='<span class="line-field">'+state_info.mo_name+'</span>';
  }
  else if(mid==3)
  {
    tmp='<span class="line-field">'+state_info.me_name+'</span>';
  }
  else if(mid==4)
  {
    tmp='<span class="line-field">'+state_info.mso_name+'</span>';
  }
  $("#action_line_2 .field-right").html(tmp);
}

function ZP27(rid)
{
  var tmp_select='<div class="select-list"><div class="scroll-pane">';
  var def_reg=0;
  for(var i=1; i<=10; i++)
  {
    if(lang['reg_data_'+i+'_'+rid]===undefined || jQuery.inArray(lang['reg_data_'+rid+'_'+i], region_list )>-1)
    {
      continue;
    }
    if(def_reg==0)
    {
      def_reg=i;
    }
    tmp_select+='<p class="scroll_item'+lang['reg_data_'+i+'_'+rid]+'" data-item="'+lang['reg_data_'+i+'_'+rid]+'">'+lang['reg_'+lang['reg_data_'+i+'_'+rid]]+'</p>';

  }
  var tmp='<div class="select-input" data-item="'+lang['reg_data_'+def_reg+'_'+rid]+'" id="action_field_2"><span class="select-value">'+lang['reg_'+lang['reg_data_'+def_reg+'_'+rid]]+'</span><span class="arrow"><i class="try"></i></span></div>';
  tmp+=tmp_select;
  tmp+='</div></div>';
  $("#action_line_2").show();
  $("#action_line_2 .label").html(lang['goal']);
  $("#action_line_2 .field-right").html(tmp);
}


$('.selected-color').live('click', function(){
  if($(this).next().css('display')=='none')
  {
    $(this).next().show();
  }
  else
  {
    $(this).next().hide();
  }
});

$('.color-list li').live('click', function(){
  var parent=$(this).parents('.color-list').prev();
  parent.children('.color-sample').data('item', $(this).data('item')).attr('data-item', $(this).data('item')).attr('class', 'color-sample color-'+$(this).data('item'));
  $(this).parents('.color-list').hide();
});

function NewState()
{
  $.post('https://socforge.com/WP/api/NewState/?' + RandomGet(), { id: id, key: key, name: $("#state_name").val(), color: $("#state_color").data('item'), vk_link: $("#state_vk_link").val(), type: $("#state_type").data('item')  }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      HideWindowCreate();
      Error(json.r);
      return;
    }
    else
    {
      State();
    }
  });
}


function NewParty()
{
  $.post('https://socforge.com/WP/api/NewParty/?' + RandomGet(), { id: id, key: key, name: $("#party_name").val(), color: $("#party_color").data('item'), prefix: $("#party_prefix").val(), vk_link: $("#party_vk_link").val(), description: $("#party_description").val(), views: $( "#party_views").data('item') }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r==-149)
    {
      $('#party_name').addClass('error_color').focus();
      setTimeout('$("#party_name").removeClass("error_color")',700);
    }
    else if(json.r<0)
    {
      HideWindowCreate();
      Error(json.r);
    }
    else
    {
      HideWindowCreate();
      SwitchContent('party');
    }
  });
}

function EditParty(pid)
{
  $.post('https://socforge.com/WP/api/EditParty/?' + RandomGet(), { id: id, key: key, pid: pid, name: $("#party_name").val(), color: $("#party_color").data('item'), prefix: $("#party_prefix").val(), vk_link: $("#party_vk_link").val(), description: $("#party_description").val(), views: $( "#party_views").data('item') }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      $('#party_name').addClass('error_color').focus();
      setTimeout('$("#party_name").removeClass("error_color")',700);
      return;
    }
    else
    {
      HideWindowCreate();
      SwitchContent('party');
    }
  });
}


function Store(preload)
{
  $.post('https://socforge.com/WP/api/store/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<ul class="store-list">';
    var i=0;
    for(var key_item in json.store){
      var tmp_on='';
      if(key_item==cur_key_item)
      {
        tmp_on=' on'
      }
      tmp+='<li class="store-item '+tmp_on+'" id="store-item-'+key_item+'" onclick="StoreAction(\''+key_item+'\',0)">';
      tmp+='<i class="store-icon icon-'+key_item+' fl"></i>';
      tmp+='<div class="store-text fr"><p>'+lang[key_item]+'</p><p class="store-price" id="store_item_count_'+key_item+'">'+ToNumber(json.store[key_item])+'</p>';
      if(key_item!='oil' && key_item!='ore' && key_item!='coal')
      {
        tmp+='<p>'+lang['mod']+' '+weapon_mod[i]+', &minus;'+weapon_energy[i]+' '+lang['energy_s']+'</p>';
        i++;
      }
      tmp+='</div></li>';
      user[key_item]=json.store[key_item];
    }
    tmp+='</ul>';
    tmp+='<ul class="store-act">';
    tmp+=$(".store-act").html();
    tmp+='</ul>';
    if(preload==0)
    {
      $("#store_content").html(tmp);
      SetLoc("store");
      $('#menu_store').css({opacity: 1});
      StoreAction(cur_key_item,0);
      CheckStep(3);
      CheckStep(21);
    }
    else
    {
      $("#store_content").html(tmp);
      StoreAction(cur_key_item,1);
    }
  });
}

function Sys_AssemblyPrice(key_item, count, resource)
{
  return Math.ceil(count*assembly_price[key_item+'_'+resource]*(1-user.skill_1*0.001-user.skill_2*0.0025));
}

function AssemblyPrice(key_item)
{
  var count_items=0;
  var count=$("#assembly_val").val();
  var tmp='';
  if(count==undefined)
  {
    count=1;
  }

  if(assembly_price[key_item+'_oil']>0)
  {
    tmp+='<p>'+ToNumber(Sys_AssemblyPrice(key_item, count, 'oil'))+' '+lang['2_oil']+'</p>';
    count_items++;
  }
  if(assembly_price[key_item+'_coal']>0)
  {
    tmp+='<p>'+ToNumber(Sys_AssemblyPrice(key_item, count, 'coal'))+' '+lang['2_coal']+'</p>';
    count_items++;
  }
  if(assembly_price[key_item+'_ore']>0)
  {
    tmp+='<p>'+ToNumber(Sys_AssemblyPrice(key_item, count, 'ore'))+' '+lang['2_ore']+'</p>';
    count_items++;
  }
  if(assembly_price[key_item+'_cash']>0)
  {
    tmp+='<p>'+ToNumber(Sys_AssemblyPrice(key_item, count, 'cash'))+' RUB</p>';
    count_items++;
  }
  if(assembly_price[key_item+'_gold']>0)
  {
    tmp+='<p>'+ToNumber(Math.ceil(count*assembly_price[key_item+'_gold']))+' G</p>';
    count_items++;
  }
  if(count_items==1)
  {
    tmp='<p>&nbsp;</p>'+tmp;
  }
  tmp+='<button class="bttn" onclick="NewWeapon(\''+key_item+'\')">'+lang['create']+'</button>';
  $("#assembly_price").html(tmp);
  return tmp;
}





function MarketSum(price)
{
  var count=$("#store_buy_val").val();
  $("#store_buy_sum_val").html(ToNumber(count*price));
}

var assembly_price={};

var cur_key_item='oil';
function StoreAction(key_item, preload)
{
  $.post('https://socforge.com/WP/api/StoreAction/?' + RandomGet(), { id: id, key: key, key_item: key_item }, function (data) {
    var json = jQuery.parseJSON(data);
    cur_key_item=key_item;
    $(".store-item").removeClass('on');
    $("#store-item-"+key_item).addClass('on');

    user.skill_1=json.user.skill_1;
    user.skill_2=json.user.skill_2;

    var tmp='<li class="production"><div class="title">'+lang['production']+'</div>';
    if(key_item=='oil' || key_item=='ore' || key_item=='coal')
    {
      tmp+='<div class="act-item no-act"><p>'+lang['unavailable']+'</p></div>';
    }
    else
    {
      assembly_price[key_item+'_oil']=json.assembly.oil;
      assembly_price[key_item+'_coal']=json.assembly.coal;
      assembly_price[key_item+'_ore']=json.assembly.ore;
      assembly_price[key_item+'_cash']=json.assembly.cash;
      assembly_price[key_item+'_gold']=json.assembly.gold;
      $("#assembly_val").val(1);
      tmp+='<div class="act-item">';
      tmp+='<div class="fl"><i class="store-icon icon-'+key_item+'"></i></div>';
      tmp+='<div class="store-form fr"><div class="left fl"><input type="text" class="input-text hint" value="1" data-hint="1" id="assembly_val" value="1" maxlength="6" onkeyup="AssemblyPrice(\''+key_item+'\');">';
      tmp+='<p>'+lang['pcs']+'</p></div>';
      tmp+='<div class="right fr" id="assembly_price">'+AssemblyPrice(key_item)+'</div></div></div>';
    }
    tmp+='</li>';
    tmp+='<li class="sell"><div class="title">'+lang['sale']+'</div>';
    if(json.mysell.price==-1)
    {
      var tmp_price='';
      if(json.market.cur_price!=-1)
      {
        tmp_price=json.market.cur_price-1;
      }
      tmp+='<div class="act-item "><div class="fl"><i class="store-icon icon-'+key_item+'"></i></div>';
      tmp+='<div class="store-form fr"><div class="left fl"><input type="text" id="store_sell_val" maxlength="6" class="input-text hint" value="" placeholder="" onkeyup="ReSizeFont();"><p>'+lang['count'].toLowerCase()+'</p></div>';
      tmp+='<div class="right fr"><input type="text" id="store_sell_val_price" maxlength="6" class="input-text hint" value="'+tmp_price+'" placeholder="" onkeyup="ReSizeFont();"><p>'+lang['price'].toLowerCase()+' (RUB)</p><button class="bttn" onclick="SellItem(\''+key_item+'\');">'+lang['sell']+'</button></div>';
      tmp+='</div></div>';
    }
    else
    {
      tmp+='<div class="act-item "><div class="fl"><i class="store-icon icon-'+key_item+'"></i></div>';
      tmp+='<div class="store-form fr"><div class="left fl"><input type="text" id="store_sell_val" class="input-text hint" value="'+json.mysell.count+'" data-hint="1" disabled><p>'+lang['count'].toLowerCase()+'</p></div>';
      tmp+='<div class="right fr"><input type="text" id="store_sell_val_price" class="input-text hint" value="'+json.mysell.price+'" data-hint="1" disabled><p>'+lang['price'].toLowerCase()+' (RUB)</p><button class="bttn" onclick="CancelSellItem(\''+key_item+'\');">'+lang['cancel']+'</button></div>';
      tmp+='</div></div>';
    }
    tmp+='</li>';
    tmp+='<li class="buy"><div class="title">'+lang['purchase']+'</div>';
    if(json.market.id<0)
    {
      tmp+='<div class="act-item no-act"><p>'+lang['no_active_offers']+'</p></div>';
    }
    else
    {
      var is_my_sell='';
      if(json.market.id==json.mysell.id)
      {
        is_my_sell='style="background: #e4e4e4; color: #000;"'
      }
      tmp+='<div class="act-item "><div class="fl"><i class="store-icon icon-'+key_item+'"></i></div>';
      tmp+='<div class="store-form fr"><div class="left fl"><input type="text" class="input-text hint" value="1" data-hint="1" id="store_buy_val" maxlength="6" onkeyup="ReSizeFont(); MarketSum(\''+json.market.price+'\');"><p>'+lang['count'].toLowerCase()+'</p></div>';
      tmp+='<div class="right fr"><p class="buy-price" id="store_buy_sum_val">'+ToNumber(json.market.price)+'</p><p>'+lang['sum'].toLowerCase()+'(RUB)</p><button class="bttn" '+is_my_sell+' onclick="BuyItem(\''+key_item+'\','+json.market.id+');">'+lang['buy']+'</button></div></div></div>';
    }
    tmp+='</li>';

    $(".store-act").html(tmp).show();
    cur_store_action=key_item;
  });
}
var cur_store_action="";

function ReSizeFont()
{
  if($("#store_sell_val_price").val().length>5)
  {
    $("#store_sell_val_price").addClass('small')
  }
  else
  {
    $("#store_sell_val_price").removeClass('small')
  }
  if($("#store_sell_val").val().length>5)
  {
    $("#store_sell_val").addClass('small')
  }
  else
  {
    $("#store_sell_val").removeClass('small')
  }
  if($("#store_buy_val").val().length>5)
  {
    $("#store_buy_val").addClass('small')
  }
  else
  {
    $("#store_buy_val").removeClass('small')
  }
}

function NewWeapon(key_item)
{
  var item_count=$("#assembly_val").val();
  $.post('https://socforge.com/WP/api/NewWeapon/?' + RandomGet(), { id: id, key: key, key_item: key_item, count: item_count}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    else
    {

      user[key_item]+=item_count-0;
      user['oil']=user['oil']-Sys_AssemblyPrice(key_item, item_count, 'oil');
      user['ore']=user['ore']-Sys_AssemblyPrice(key_item, item_count, 'ore');
      user['coal']=user['coal']-Sys_AssemblyPrice(key_item, item_count, 'coal');

      $("#store_item_count_"+key_item).html(ToNumber(user[key_item]));
      $("#store_item_count_oil").html(ToNumber(user['oil']));
      $("#store_item_count_ore").html(ToNumber(user['ore']));
      $("#store_item_count_coal").html(ToNumber(user['coal']));

      user.gold-=assembly_price[key_item+'_gold']*item_count;
      user.cash-=Sys_AssemblyPrice(key_item, item_count, 'cash');
      $("#total-g").html(ToNumber(user.gold)+' G +');
      $("#total-rub").html(ToNumber(user.cash)+' RUB +');

      $("#assembly_val").html(1);

      if(user.step==11)
      {
        $("#new_weapon").css("color", "#0090ff").css("background-color", "#FFF");
        CheckStep(12);
      }
      else
      {
        SMessage(lang['you_create'].replace('%s', '<span class="blue">'+lang[key_item].toLowerCase()+'</span>').replace('%c', ToNumber(item_count)));
      }

    }
  });
}


function SellItem(key_item)
{
  var item_count=$("#store_sell_val").val();
  var item_price=$("#store_sell_val_price").val();
  $.post('https://socforge.com/WP/api/Sell/?' + RandomGet(), { id: id, key: key, key_item: key_item, count: item_count, price:item_price}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }
    else
    {
      SMessage(lang['you_sell'].replace('%s', '<span class="blue">'+lang[key_item].toLowerCase()+'</span>').replace('%c', ToNumber(item_count)));
      user[key_item]-=item_count-0;
      $("#store_item_count_"+key_item).html(ToNumber(user[key_item]));
      StoreAction(key_item);
    }
  });
}


function CancelSellItem(key_item)
{
  $.post('https://socforge.com/WP/api/CancelSell/?' + RandomGet(), { id: id, key: key, key_item: key_item}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
    }
    else
    {
      SMessage(lang['you_sell_cancel'].replace('%s', '<span class="blue">'+lang[key_item].toLowerCase()+'</span>'));
      Store(0);
      StoreAction(key_item);
    }
  });
}

function BuyItem(key_item, mid)
{
  var item_count=$("#store_buy_val").val();
  $.post('https://socforge.com/WP/api/Buy/?' + RandomGet(), { id: id, key: key, count: item_count, mid: mid}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      if(json.r==-126)
      {
        BuyCashWindow();
        return;
      }
      Error(json.r);
    }
    else
    {
      user[key_item]+=json.r-0;
      $("#store_item_count_"+key_item).html(ToNumber(user[key_item]));
      StoreAction(key_item);
      if(user.step==10)
      {
        $("#new_buy").css("color", "#0090ff").css("background-color", "#FFF");
        CheckStep(11);
      }
      else if(user.step==18)
      {
        $("#new_buy").css("color", "#0090ff").css("background-color", "#FFF");
        CheckStep(19);
        user.time_skill=0;
        EndSkillUp(0);
      }
      else
      {
        SMessage(lang['you_buy'].replace('%s', '<span class="blue">'+lang[key_item].toLowerCase()+'</span>').replace('%c', ToNumber(json.r)));
      }
      user.cash-=(json.price*json.r);
      $("#total-rub").html(ToNumber(user.cash)+' RUB +');
    }
  });
}



function Work(preload)
{
  $.post('https://socforge.com/WP/api/work/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    user.work_exp = json.user.work_exp;
    user.skills = json.user.skills;
    var tmp='<ul class="work-list">';
    for(var i=0; i<json.work.length; i++)
    {
      var wid=json.work[i].id;
      var pay='';
      var tmp_class='black';
      if(json.work[i].cash>0)
      {
        pay='+'+ToNumber(json.work[i].cash)+ ' RUB';
        tmp_class='green';
      }
      else if(json.work[i].oil>0)
      {
        pay='+'+ToNumber(json.work[i].oil)+ ' '+lang['bar']+' '+lang['2_oil'];
      }
      else if(json.work[i].coal>0)
      {
        pay='+'+ToNumber(json.work[i].coal)+ ' '+lang['kg']+' '+lang['2_coal'];
      }
      else if(json.work[i].ore>0)
      {
        pay='+'+ToNumber(json.work[i].ore)+ ' '+lang['kg']+' '+lang['2_ore'];
      }
      else if(json.work[i].gold>0)
      {
        pay='+'+ToNumber(json.work[i].gold)+ ' G';
        tmp_class='gold';
      }
      tmp+='<li class="work-item work-blue work-'+wid+'"><i class="work-icon fl"></i><div class="work-text fr"><p class="work-title">'+lang['work_'+wid]+'</p>';
      tmp+='<p id="work_item_exp_'+wid+'">'+lang['standing']+': '+user.work_exp[wid-1]+'</p><p class="work-plus '+tmp_class+'" id="work_item_pay_'+wid+'">'+pay+'</p><button type="button" class="bttn-work" onclick="ToWork('+wid+')">&minus;&thinsp;'+json.work[i].price+'&thinsp;'+lang['e']+'</button></div></li>';
    }
    tmp+='</div>';
    if(preload==0)
    {
      HideAllTabs();
      $("#work_content").html(tmp).show();
      SetLoc("work");
      CheckStep(5);
    }
    else
    {
      $("#work_content").html(tmp);
    }
  });
}


function ToWork(wid)
{
  $.post('https://socforge.com/WP/api/towork/?' + RandomGet(), { id: id, key: key, wid:wid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(user.step>0)
    {
      if(wid!=1)
      {
        Error(137);
        return;

      }
      if(user.step!=5)
      {
        Error(137);
        return;
      }
    }
    if(json.r<0)
    {
      if(json.r==-101)
      {
        BuyEnergyWindow();
      }
      else if(json.r==-177)
      {
        NeedVisa(json.state);
      }
      else if(json.r==-181)
      {
        SMessage(lang['err_181'].replace('%s','<b>'+ToTime(json.time)+'</b>'));
      }
      else if(json.r==-201)
      {
        SMessage(lang['err_201'].replace('500','1500'));
      }
      else
      {
        Error(json.r);
      }
    }
    else
    {

      user.work_exp[wid-1]++;
      $("#work_item_exp_"+wid).html(lang['standing']+': '+user.work_exp[wid-1]);
      if(json.next_pay.cash>0)
      {
        $("#work_item_pay_"+wid).html('+'+ToNumber(json.next_pay.cash)+ ' RUB');
        user.cash+=json.pay.cash;
        $("#total-rub").html(ToNumber(user.cash)+' RUB +');
      }
      if(json.next_pay.oil>0)
      {
        $("#work_item_pay_"+wid).html('+'+ToNumber(json.next_pay.oil)+ ' '+lang['bar']+' '+lang['2_oil']);
      }
      if(json.next_pay.coal>0)
      {
        $("#work_item_pay_"+wid).html('+'+ToNumber(json.next_pay.coal)+ ' '+lang['kg']+' '+lang['2_coal']);
      }
      if(json.next_pay.ore>0)
      {
        $("#work_item_pay_"+wid).html('+'+ToNumber(json.next_pay.ore)+ ' '+lang['kg']+' '+lang['2_ore']);
      }
      if(json.next_pay.gold>0)
      {
        $("#work_item_pay_"+wid).html('<span class="gold">+'+ToNumber(json.next_pay.gold)+ ' G</span>');
        user.gold+=json.pay.gold;
        $("#total-g").html(ToNumber(user.gold)+' G +');
      }
      if(user.step==5 && json.exp>15)
      {
        CheckStep(6);
        $(".work_item_but button").first().css("color", "#0090ff").css("background-color", "#FFF");
      }

      if(user.exp+json.next_pay.exp>=user.next_level)
      {
        cur_update=0;
        Update();
      }
      else
      {
        SetEnergy(json.energy);
        SetExp(user.exp+json.next_pay.exp);
      }
    }
  });
}

function BuyEnergyWindow() {
  var c = {};
  c.html = lang['not_enough_energy'];
  c.butt_n = [lang['wait'],lang['restore']];
  c.butt_a = ['','BuyEnergy();'];
  c.butt_c = ['white','green'];
  win_2_but.css('margin-top', '60px');
  Window(c);
}


function ComplaintWindow(cid, name)
{
  var c = {};
  c.html = lang['send_complaint'].replace('%u','<span class="blue">'+name+'</span>');
  c.html += '<br><br>Причина: <input style="width: 200px;" maxlength="30" id="ban_reason"><br>Дней: <input style="width: 30px;" maxlength="1" value="1"  id="ban_time">';
  c.butt_n = [lang['cancel'],lang['send']];
  c.butt_a = ['','Complaint('+cid+');'];
  c.butt_c = ['white','red'];
  Window(c);
}

function Complaint(cid)
{
  $.post('https://socforge.com/WP/api/Complaint/?' + RandomGet(), { id: id, key: key, cid: cid, reason: $("#ban_reason").val(), time: $("#ban_time").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if (json.r == 1) {
      SMessage(lang['pm_send']);
    }
    else
    {
      Error(json.r);
    }
  });
}

function NeedVisa(state) {
  var c = {};
  c.html = lang['err_177'];
  c.butt_n = [lang['cancel'],lang['send_request']];
  c.butt_a = ['','StateApp(2, '+state+');'];
  c.butt_c = ['white','green'];
  Window(c);
}

function BuyGoldWindow() {
  var c = {};
  c.html = lang['not_enough_gold'];
  c.butt_n = [lang['cancel'],lang['goto_shop']];
  c.butt_a = ['','VoteConvert();'];
  c.butt_c = ['white','green'];
  Window(c);
}

function BuyGoldWindowDonate(sum, callback) {
  var c = {};
  c.html = lang['not_enough_gold_buy'].replace('%s', '<span class="blue">'+sum+'&thinsp;G</span>').replace('%v', '<span class="blue">'+(sum/20)+'&thinsp;'+lang['vote_5']+'</span>');
  c.butt_n = [lang['cancel'],lang['buy']];
  c.butt_a = ['','Donate(\'g'+(sum/40)+'\');'+callback];
  c.butt_c = ['white','green'];
  Window(c);
}

function BuyCashWindow() {
  var c = {};
  c.html = lang['not_enough_cash'];
  c.butt_n = [lang['cancel'],lang['goto_shop']];
  c.butt_a = ['','VoteConvert();'];
  c.butt_c = ['white','green'];
  Window(c);
}

function GoToStore(err) {
  var c = {};
  c.html = lang['err_'+Math.abs(err)];
  c.butt_n = [lang['cancel'],lang['goto_store']];
  c.butt_a = ['','SwitchContent(\'store\');'];
  c.butt_c = ['white','blue'];
  Window(c);
}

function BuyEnergy()
{
  $.post('https://socforge.com/WP/api/BuyEnergy/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if (json.r == 1) {
      SMessage(lang['you_top_up_energy']);
      SetEnergy(user.maxenergy);
      user.gold-=50;
      $("#total-g").html(ToNumber(user.gold)+' G +');
    }
    else
    {
      if(json.r==-102)
      {
        BuyGoldWindowDonate(100, 'BuyEnergyWindow()');
      }
      else if(json.r==-203)
      {
        SMessage(lang['err_'+json.r*(-1)]+'<br>'+lang['remaining']+': '+ToTime(json.time));
      }
      else
      {
        Error(json.r);
      }
    }
  });
}


var _win = false;
var mess_count = 0;


function HideWindow(id) {
  if(session_lock)
  {
    return;
  }
  $("#msg" + id).hide();//.html('');
  mess_count--;
  _win = false;
}

function SMessage(html) {
  var c = {};
  c.html = html;
  c.butt_n = [lang['continue']];
  c.butt_a = [''];
  c.butt_c = ['blue'];
  Window(c);
}

function Error(code) {
  SMessage(lang['err_'+Math.abs(code)]);
}

function SetEnergy(new_energy)
{
  if(new_energy==user.energy)
  {
    return;
  }

  user.energy=new_energy;
  if(user.energy>user.maxenergy)
  {
    user.energy=user.maxenergy;
  }
  if(user.energy>user.maxenergy)
  {
    user.energy=user.maxenergy;
  }
  $("#energy").html(user.energy+"/"+user.maxenergy);
  $("#energy_strip").progressbar({
    value: user.energy*100/user.maxenergy
  });
}


function SetExp(new_exp)
{
  if(new_exp==user.exp)
  {
    return;
  }
  var new_level=false;
  var old_exp=user.exp-user.prev_level;
  var cur_exp=new_exp-user.prev_level;
  var max_exp=user.next_level-user.prev_level;
  var dif_exp=cur_exp-old_exp;

  if(cur_exp<user.cur_level_exp)
  {
    $("#exp").css("width", 0);
    new_level=true;
  }
  user.cur_level_exp=cur_exp;
  user.exp=new_exp;

  if(dif_exp==0 && !new_level)
  {
    return;
  }
  if(new_level)
  {
    user.level++;
    $("#user_photo .side-text").html(user.level);
  }
  $("#exp").html(cur_exp+"/"+max_exp);
  $("#exp_strip").progressbar({
    value: cur_exp*100/max_exp
  });
}



function SetLoc(cur_loc)
{
  loc_hash=cur_loc;
  window.location.hash = loc_hash;
}

function RandomGet() {
  var foo = new Date;
  return foo.getTime();
}

function BlurReg(rid)
{
  $("#reg_"+rid).css("fill", "");
}

function FocusReg(rid)
{
  $("#reg_"+rid).css("fill", "red");
}


var states={};
var regions={};
states['name_0']=lang['free_region'];


var choose_region=0;
var map_watch="simple";

var cur_action_type=0;

function BuildInfo()
{
  $.post("https://socforge.com/WP/api/BuildingInfo/?" + RandomGet(), { id: id, key: key, rid: cur_mid, type: $("#action_field_1 option:selected").val()}, function (data) {
    var json = jQuery.parseJSON(data);
    $("#action_line_3").html('<td>'+lang['costs']+':</td><td>'+ToNumber(json.r.cash)+' RUB, '+ToNumber(json.r.oil)+' '+lang['5resourse']+'</td>').show();
  });
}

var vk_id_get=false;

function NewZP()
{
  var param1="0";
  var param2="0";
  var param3="0";
  var param4="0";
  var type=$("#type_zp").data('item');
  if(type==3 || type==4 || type==5 || type==6 || type==13 || type==28)
  {
    param1=$("#action_field_1").data('item');
  }
  else if(type==21|| type==22 || type==23 || type==31 || type==32 || type==41)
  {
    param1=$("#action_field_1").data('item');
  }
  else if(type==24)
  {
    param1=$("#action_field_1").data('item');
    param2=$("#action_field_2").data('item');
  }
  else if(type==16 || type==18 || type==19 || type==20)
  {
    param1=$("#action_field_1").data('item');
    param2=$("#action_field_2").val();
  }
  else if(type==17 || type==25 || type==35 || type==40)
  {
    param1=$("#action_field_1").val();
  }
  else if(type==26)
  {
    param1=$("#action_field_1").data('item');
  }
  else if(type==9 || type==33 || type==34 || type==36)
  {
    if(vk_id_get)
    {
      param1=$("#action_field_1").val();
      vk_id_get=false;
    }
    else
    {
      var tmp_screen_name=$("#action_field_1").val();
      var ind=tmp_screen_name.indexOf('com/');
      tmp_screen_name= tmp_screen_name.substring(ind+4);
      VK.api("users.get", { user_ids:tmp_screen_name, https:1 }, function (data) {
        $("#action_field_1").val('http://vk.com/id'+data.response[0].id);
        vk_id_get=true;
        NewZP();

      });
      return;
    }
  }
  else if(type==10 || type==39)
  {
    if(vk_id_get)
    {
      param1=$("#action_field_1").data('item');
      param2=$("#action_field_2").val();
      vk_id_get=false;
    }
    else
    {
      var tmp_screen_name=$("#action_field_2").val();
      var ind=tmp_screen_name.indexOf('com/');
      tmp_screen_name=tmp_screen_name.substring(ind+4);
      if(tmp_screen_name!="" || type!=39)
      {
        VK.api("users.get", { user_ids:tmp_screen_name, https:1 }, function (data) {
          $("#action_field_2").val('http://vk.com/id'+data.response[0].id);
          vk_id_get=true;
          NewZP();

        });
      }
      else
      {
        vk_id_get=true;
        NewZP();
      }
      return;
    }
  }
  else if(type==12)
  {
    param1=$("#action_field_1").data('item');
  }
  else if(type==27 || type==29)
  {
    param1=$("#action_field_1").data('item');
    param2=$("#action_field_2").data('item');
  }
  else if(type==14 || type==15)
  {
    param1=$("#action_field_1").data('item');
    param2=$("#action_field_2").data('item');
  }
  else if(type==37)
  {
    param1=$("#action_field_1").val();
    param2=$("#action_field_2").val();
    param3=$("#action_field_3").val();
    param4=$("#action_field_4").val();
  }
  else if(type==38)
  {
    param1=$("#action_field_1").data('item');
    param2=$("#action_field_2").data('item');
    param3=$("#action_field_3").val();
  }
  $.post("https://socforge.com/WP/api/NewZP/?" + RandomGet(), { id: id, key: key, type: type, param1: param1, param2: param2, param3: param3, param4: param4}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      HideWindowCreate();
      State();
    }
    else
    {
      $("#zp_note").html('<span class="red">'+lang['error']+':<br>'+lang['err_'+(-json.r)]+'</span>');
    }
  });
}

var map_content=$('#map_content');
var info_content=$('#info_content');
var messages_content=$('#messages_content');
var store_content=$('#store_content');
var work_content=$('#work_content');
var polit_content=$('#polit_content');
var media_content=$('#media_content');
var war_content=$('#war_content');
var party_content=$('#party_content');
var top_content=$('#top_content');
var state_content=$('#state_content');
var win_2_but=$("#win-2-but");
var win_1_but=$("#win-1-but");
var win_layer=$(".win-layer");
var chat_area = $(".msg-list ul");
var online_area = $(".players-list");

function HideAllTabs()
{
  map_content.css('left', '-9999px').css('position', 'absolute');
  info_content.css('display', 'none');
  messages_content.css('display', 'none');
  store_content.css('display', 'none');
  work_content.css('display', 'none');
  polit_content.css('display', 'none');
  media_content.css('display', 'none');
  war_content.css('display', 'none');
  top_content.css('display', 'none');
  party_content.css('display', 'none');
  state_content.css('display', 'none');
}


function SwitchContent(label)
{
  clearInterval(window.war_timer);
  HideAllTabs();
  if(label=="work")
  {
    Work(0);
  }
  else if(label=="media")
  {
    Media();
  }
  else if(label=="store")
  {
    Store(0);
  }
  else if(label=="party")
  {
    Party();
  }
  else if(label=="state")
  {
    State();
  }
  else if(label=="map")
  {
    Map();
  }
  else if(label=="info")
  {
    Info();
  }
  else if(label=="top")
  {
    Top('exp', 1,0);
  }
  else if(label=="messages")
  {
    Messages(1);
  }
  $('#'+label+'_content').css('display','block');
  $("#donate_content").css('display', 'none');
  $('#profile_content').css('display', 'none');
}

function Map()
{
  map_content.css('left', '0').css('position', 'relative')
  $.post("https://socforge.com/WP/api/World/?" + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    UpdateMap(json);
    SetLoc('map');
    CheckStep(13);
    if(user.step==13)
    {
      map.showMark(80, 'red_mark', {
        src: 'https://socforge.com/WP/img/map/follow.png'
      });
    }
    else if(user.step==14)
    {
      map.hideMark(80);
      map.showMark(80, 'red_mark', {
        src: 'https://socforge.com/WP/img/map/position.png'
      });
    }
  });
}



function MyMessages(type)
{
  $.post("https://socforge.com/WP/api/MyMessages/?" + RandomGet(), { id: id, key: key, type: type }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    tmp+='<div id="inbox" class="blue_button" style="font-size: 150%;position: absolute;top: 10px;left: 50px;">'+lang['inbox']+'</div>';
    tmp+='<div id="outbox" class="blue_button" style="font-size: 150%;position: absolute;top: 10px;left: 250px;">'+lang['outbox']+'</div>';
    tmp+='<div id="messages_list">';
    var uids_list='';
    for(var i=0; i<json.messages.length; i++)
    {
      var tmp_img=data_img['uid_'+json.messages[i].uid];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.messages[i].uid+',';
      }
      tmp+='<div id="message_item">';
      tmp+='<div class="messages_photo" id="ph_uid_'+json.messages[i].uid+'" style="background-image: url('+tmp_img+'); width: 45px; background-size: 45px;"></div>';
      tmp+='<div class="messages_name">'+json.messages[i].name+'</div>';
      tmp+='<div class="messages_text">'+json.messages[i].text+'</div>';
      tmp+='</div>';
    }
    tmp+='</div>';
    $("#messages_content").html(tmp);
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}

function MyVisa()
{
  $.post("https://socforge.com/WP/api/MyVisa/?" + RandomGet(), { id: id, key: key}, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div id="mso_index_list" class="scroll-pane">';
    tmp+='<table><tr><th style="width: 300px;">'+lang['state']+'</th><th>'+lang['type']+'</th><th>'+lang['term']+'</th><th>'+lang['result']+'</th></tr>';
    if(json.response.length==0)
    {
      SMessage(lang['no_visa']);
      return;
    }
    for(var i=0; i<json.response.length; i++)
    {
      tmp+='<tr>';
      tmp+='<td>'+json.response[i].name+'</td>';
      if(json.response[i].status>2)
      {
        lang['visa_res_3']=lang['cancel'];
      }
      if(json.response[i].status==1)
      {
        tmp+='<td>'+lang['visa_'+json.response[i].category]+'</td>';
        tmp+='<td>'+(new Date(json.response[i].time_start*1000).toLocaleDateString()) +' - '+ (new Date(json.response[i].time_end*1000).toLocaleDateString()) +'</td>';
        tmp+='<td>'+lang['visa_res_'+json.response[i].status]+'</td>';
      }
      else
      {
        tmp+='<td>----</td>';
        tmp+='<td>---</td>';
        tmp+='<td>'+lang['visa_res_'+json.response[i].status]+'</td>';
      }
      tmp+='</tr>';
    }
    tmp+='</table>';
    tmp+='</div>';
    $("#profile_content").html(tmp);
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:350});
  });
}

function Media()
{
  $.post("https://socforge.com/WP/api/Media/?" + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);

    var tmp_action='';
    if(json.user.status>0)
    {
      tmp_action='NewArticleWindow()';
    }
    else
    {
      tmp_action='NewArticleError()';
    }
    var tmp='<div class="article-wrap">';
    tmp+='<button type="button" class="bttn bttn-grey fr" onclick="'+tmp_action+'">'+lang['add_article']+'</button>';
    if(json.user.status>0)
    {
      tmp+='<button type="button" class="bttn bttn-grey fr" onclick="MediaProfile('+json.user.mid+')">'+lang['profile_media']+'</button>';
    }
    tmp+='<div class="clear"></div>';
    tmp+='<div class="articles"><div class="col-3 fl"><div class="article-location">'+lang['world']+'</div><ul>';
    for(var i=0; i<json.world.length; i++)
    {
      if(i==5)
      {
        break;
      }
      tmp+='<li onclick="ViewArticle('+json.world[i].id+')"><div class="title">'+json.world[i].title+'</div><p>'+json.world[i].name+'</p></li>';
    }
    tmp+='</ul></div><div class="col-3 fl"><div class="article-location">'+lang['state']+'</div><ul>';
    for(var i=0; i<json.state.length; i++)
    {
      if(i==5)
      {
        break;
      }
      tmp+='<li onclick="ViewArticle('+json.state[i].id+')"><div class="title">'+json.state[i].title+'</div><p>'+json.state[i].name+'</p></li>';
    }
    tmp+='</ul></div><div class="col-3 fl"><div class="article-location">'+lang['region']+'</div><ul>';
    for(var i=0; i<json.region.length; i++)
    {
      if(i==5)
      {
        break;
      }
      tmp+='<li onclick="ViewArticle('+json.region[i].id+')"><div class="title">'+json.region[i].title+'</div><p>'+json.region[i].name+'</p></li>';
    }
    tmp+='</ul></div><div class="clear"></div></div></div>';
    $("#media_content").html(tmp);
  });
}





function NewArticleError() {
  var c = {};
  c.html = lang['can_create_smi'];
  c.butt_n = [lang['cancel'], lang['create']];
  c.butt_a = ['','NewMediaWindow();'];
  c.butt_c = ['white', 'green'];
  Window(c);
}

function NewArticle()
{
  $.post('https://socforge.com/WP/api/NewArticle/?' + RandomGet(), { id: id, key: key, title: $("#article_title_input").val(), text: $("#article_editor").bbcode() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      if(json.r==-131)
      {
        SMessage(lang['err_131']+'<br><span class="red">'+json.cur+'</span>/'+json.max);
        return
      }
      if(json.r==-102)
      {
        BuyGoldWindow();
        return;
      }
      Error(json.r);
      return;
    }
    ViewArticle(json.r);
  });
}

function NewMediaWindow()
{
  if(user.level<15)
  {
    Error(200);
    return;
  }
  var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
  tmp+='<h2>'+lang['create_media']+'</h2>';
  tmp+='<div class="create-party-form">';
  tmp+='<div class="field">';
  tmp+='<label class="label field-left fl">'+lang['name_media']+'</label>';
  tmp+='<div class="field-right fr"><input type="text" id="media_name" class="input-text hint" value="" data-hint="" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
  tmp+='<div class="field-right fr"><input type="text" id="media_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
  tmp+='<div class="clear"></div></div>';
  tmp+='<div class="field"><textarea id="media_description" class="input-text hint" placeholder="'+lang['info_media']+'" maxlength="150"></textarea></div>';
  tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="NewMedia();">'+lang['create']+' (50&thinsp;G)</button></div></div></div></div>';
  $(".win-wrap").prepend(tmp);
  win_layer.css('display', 'block');
}

function NewMedia()
{
  $.post('https://socforge.com/WP/api/NewMedia/?' + RandomGet(), { id: id, key: key, name: $("#media_name").val(), vk_link: $("#media_vk_link").val(), description: $("#media_description").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      HideWindowCreate();
      if(json.r==-102)
      {
        BuyGoldWindow();
        return;
      }
      Error(json.r);
      return;
    }
    else
    {
      HideWindowCreate();
      NewArticleWindow();
    }
  });
}


function EditMediaWindow(mid)
{
  $.post('https://socforge.com/WP/api/MediaProfile/?' + RandomGet(), { id: id, key: key, mid: mid}, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='<div class="win" id="win-create"><div class="win-inner"><a onclick="HideWindowCreate();" class="win-close"></a>';
    tmp+='<h2>'+lang['edit_media']+'</h2>';
    tmp+='<div class="create-party-form">';
    tmp+='<div class="field">';
    tmp+='<label class="label field-left fl">'+lang['name_media']+'</label>';
    tmp+='<div class="field-right fr"><input type="text" id="media_name" class="input-text hint" value="'+json.media.name+'" data-hint="" maxlength="30"></div>';
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><p class="label field-left fl">'+lang['vk_group']+'</p>';
    if(json.media.vk_group!='')
    {
      tmp+='<div class="field-right fr"><input type="text" id="media_vk_link" class="input-text hint" value="http://vk.com/'+json.media.vk_group+'" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    else
    {
      tmp+='<div class="field-right fr"><input type="text" id="media_vk_link" class="input-text hint" value="" placeholder="http://vk.com/club74349100" maxlength="30"></div>';
    }
    tmp+='<div class="clear"></div></div>';
    tmp+='<div class="field"><textarea id="media_description" class="input-text hint" placeholder="'+lang['info_media']+'" maxlength="150">'+json.media.description+'</textarea></div>';
    tmp+='<div class="field bttn-field"><button type="button" class="bttn bttn-grey" onclick="HideWindowCreate();">'+lang['cancel']+'</button><button class="bttn bttn-green" onclick="EditMedia('+mid+');">'+lang['edit']+'</button></div></div></div></div>';
    $(".win-wrap").prepend(tmp);
    win_layer.css('display', 'block');
  });
}

function EditMedia(mid)
{
  $.post('https://socforge.com/WP/api/EditMedia/?' + RandomGet(), { id: id, key: key, mid: mid, name: $("#media_name").val(), vk_link: $("#media_vk_link").val(), description: $("#media_description").val() }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      $('#media_name').addClass('error_color').focus();
      setTimeout('$("#media_name").removeClass("error_color")',700);
      return;
    }
    else
    {
      HideWindowCreate();
      UserInMedia(mid, 1);
    }
  });
}


function ViewArticle(aid)
{
  $.post('https://socforge.com/WP/api/ViewArticle/?' + RandomGet(), { id: id, key: key, aid: aid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div class="article-wrap"><p class="article-title">'+json.article.title+'</p><p><span class="article_link" onclick="Profile('+json.article.author_id+');">'+json.article.author_name+'</span> &ndash; <span class="article_link" onclick="MediaProfile('+json.article.media_id+');">'+json.article.media_name+'</span></p>';
    tmp+='<div class="article-text"><div id="article_area" class="scroll-pane">';
    if(json.article.text.length<100 && json.article.text.indexOf('page-')>-1)
    {
      json.article.text=json.article.text.trim();
      var tmp_start=json.article.text.indexOf('page')+4;
      var tmp_end=json.article.text.length;
      json.article.text = json.article.text.substring(tmp_start, tmp_end);
      var params = json.article.text.split('_');
      console.log(params[0]+ ' '+params[1]);
      VK.api("pages.get", { owner_id: params[0], page_id: params[1], need_html: 1 , https:1 }, function (data) {
        json.article.text=data.response.html.replace(/href/g,'nohref');
        tmp+='<div style="width: 630px; ">'+json.article.text+'</div>';
        tmp+='</div></div><div class="article-under fr">';
        if(id==json.article.author_id)
        {
          tmp+='<span class="article-ratio"><span>'+lang['ratio']+' </span>&nbsp;<span class="num">'+json.article.ratio+'</span>&nbsp;<button type="button" class="bttn bttn-blue" onclick="EditArticleWindow('+aid+');">'+lang['edit']+'</button>';
        }
        else
        {
          tmp+='<span class="article-ratio"><span>'+lang['ratio']+' </span><span class="circle" onclick="VoteArticle('+aid+',-1);">-</span>&nbsp;&nbsp;<span class="num" id="article_ratio_num">'+json.article.ratio+'</span>&nbsp;&nbsp;<span class="circle" onclick="VoteArticle('+aid+',1);">+</span></span>';
        }
        tmp+='</div><div class="clear"></div></div>';

        HideAllTabs();
        $("#media_content").html(tmp).show();
        jQuery('#article_area').jScrollPane({showArrows: false});

        SetLoc("aid"+aid);
      });


    }
    else
    {
      tmp+='<div style="width: 630px; ">'+json.article.text+'</div>';
      tmp+='</div></div><div class="article-under fr">';
      if(id==json.article.author_id)
      {
        tmp+='<span class="article-ratio"><span>'+lang['ratio']+' </span>&nbsp;<span class="num">'+json.article.ratio+'</span>&nbsp;<button type="button" class="bttn bttn-blue" onclick="EditArticleWindow('+aid+');">'+lang['edit']+'</button>';
      }
      else
      {
        tmp+='<span class="article-ratio"><span>'+lang['ratio']+' </span><span class="circle" onclick="VoteArticle('+aid+',-1);">-</span>&nbsp;&nbsp;<span class="num" id="article_ratio_num">'+json.article.ratio+'</span>&nbsp;&nbsp;<span class="circle" onclick="VoteArticle('+aid+',1);">+</span></span>';
      }
      tmp+='</div><div class="clear"></div></div>';

      HideAllTabs();
      $("#media_content").html(tmp).show();
      jQuery('#article_area').jScrollPane({showArrows: false});

      SetLoc("aid"+aid);
    }

  });
}

function NewArticleWindow()
{
  var wbbOpt = {
    buttons: "bold,italic,underline,fontcolor,|,sup,sub,|,justifyleft,justifyright,justifycenter", resize_maxheight:190, autoresize:false
  }
  var tmp='<div class="article-wrap"><p class="article-title"><input autocomplete="off" type="text" id="article_title_input" class="input-text hint" maxlength="50"></p>';
  tmp+='';
  tmp+='<textarea id="article_editor"></textarea>';
  tmp+='<div class="article-under fr">';
  tmp+='<button type="button" class="bttn bttn-grey" onclick="Media();">'+lang['cancel']+'</button>';
  tmp+='<button type="button" class="bttn bttn-blue" onclick="NewArticle();">'+lang['create']+'</button>';
  tmp+='</div><div class="clear"></div></div>';

  $("#media_content").html(tmp);
  $("#article_editor").wysibb(wbbOpt);
  $('.wysibb .modeSwitch').remove();
}

function VoteArticle(aid, action)
{
  $.post('https://socforge.com/WP/api/VoteArticle/?' + RandomGet(), { id: id, key: key, action:action, aid:aid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp=$("#article_ratio_num").html()-0;
    tmp+=action;
    $("#article_ratio_num").html(tmp);
  });
}

function EditArticleWindow(aid)
{
  $.post('https://socforge.com/WP/api/ViewArticle/?' + RandomGet(), { id: id, key: key, aid: aid }, function (data) {
    var json = jQuery.parseJSON(data);
    var wbbOpt = {
      buttons: "bold,italic,underline,fontcolor,|,sup,sub,|,justifyleft,justifyright,justifycenter", resize_maxheight:260, autoresize:false
    }

    var tmp='<div class="article-wrap"><p class="article-title"><input autocomplete="off" type="text" id="article_title_input" class="input-text hint" maxlength="50" value="'+json.article.title+'"></p>';
    tmp+='';
    tmp+='<textarea id="article_editor"></textarea>';
    tmp+='<div class="article-under fr">';
    tmp+='<button type="button" class="bttn bttn-grey" onclick="ViewArticle('+aid+');">'+lang['cancel']+'</button>';
    tmp+='<button type="button" class="bttn bttn-blue" onclick="EditArticle('+aid+');">'+lang['change']+'</button>';
    tmp+='</div><div class="clear"></div></div>';

    $("#media_content").html(tmp);
    $("#article_editor").wysibb(wbbOpt);
    $("#article_editor").htmlcode(json.article.text);
    $('.wysibb .modeSwitch').remove();
  });
}

function EditArticle(aid)
{
  if($("#article_editor").bbcode().length>3000)
  {
    Error(131);
    return;
  }
  $.post('https://socforge.com/WP/api/EditArticle/?' + RandomGet(), { id: id, key: key, title: $("#article_title_input").val(), text: $("#article_editor").bbcode(), aid:aid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      if(json.r==-131)
      {
        SMessage(lang['err_131']+'<br><span class="red">'+json.cur+'</span>/'+json.max);
        return
      }
      if(json.r==-102)
      {
        BuyGoldWindow();
        return;
      }
      Error(json.r);
      return;
    }
    ViewArticle(aid);
  });
}

function MediaProfile(mid)
{
  $.post('https://socforge.com/WP/api/MediaProfile/?' + RandomGet(), { id: id, key: key, mid: mid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    var tmp='<div class="win-inner"><a onclick="CloseProfile();" class="win-close"></a><div class="win-left fl">';
    var tmp_img=undefined;
    if(tmp_img===undefined)
    {
      tmp+='<div id="ph_profile" class="profile-img"></div>';
    }
    else
    {
      tmp+='<div id="ph_profile" class="profile-img"></div>';
    }


    if(json.media.rang>0)
    {
      tmp+='<button type="button" class="bttn bttn-red" onclick="LeaveMediaWindow('+mid+');">'+lang['leave_media']+'</button>';
    }
    else if(json.media.rang==0)
    {
      tmp+='<button type="button" class="bttn bttn-red" onclick="LeaveMedia('+mid+');">'+lang['cancel_request']+'</button>';
    }
    else
    {
      tmp+='<button type="button" class="bttn bttn-green" onclick="JoinMedia('+mid+');">'+lang['send_request']+'</button>';
    }
    if(json.media.rang==4)
    {
      tmp+='<button type="button" class="bttn bttn-blue" onclick="UserInMedia('+mid+',1);">'+lang['manager']+'</button>';
    }
    tmp+='</div>';

    tmp+='<div class="win-right fr"><div class="profile-info">';
    tmp+='<div class="profile-name">'+json.media.name+'</div>';
    tmp+='<p>'+json.media.description+'</p>';
    tmp+='<ul class="profile-list">';
    tmp+='<li><span class="profile-point">'+lang['ratio']+':</span><span class="profile-black">'+json.media.ratio+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['region']+':</span><span class="profile-red" onclick="RegionProfile('+json.media.region+');">'+lang['reg_'+json.media.region]+'</span></li>';
    tmp+='<li><span class="profile-point">'+lang['count_members']+':</span><span class="profile-black">'+json.media.count_members +'</span></li>';
    tmp+='</ul></div>';
    tmp+='</div></div>';
    $("#profile_content").html(tmp).show();
    SetLoc("mid"+mid);

    if(tmp_img===undefined)
    {
      if(json.media.vk_group!="")
      {
        VK.api("groups.getById", { group_id: json.media.vk_group, fields:'photo_200', https:1 }, function (data) {
          if(data.error==undefined)
          {
            data_img['gid_'+json.media.vk_group]=data.response[0].photo_200;
            $("#ph_profile").css('background-image', 'url('+data_img['gid_'+json.media.vk_group]+')');
          }
        });
      }
    }
  });
}


function UserInMedia(mid, type)
{
  $.post('https://socforge.com/WP/api/UserInMedia/?' + RandomGet(), { id: id, key: key, mid: mid, type: type }, function (data) {
    var json = jQuery.parseJSON(data);
    var tmp='';
    var uids_list='';
    tmp+='<div class="members-wrap"><h2>'+lang['editors_smi']+' ';
    tmp+='</h2>';
    tmp+='<div class="members-bttn">';
    if(json.wait>0 && type==1)
    {
      tmp+='<button class="bttn bttn-blue" onclick="UserInMedia('+mid+',0)">'+lang['view_request']+' ('+json.wait+')</button>';
    }
    if(type==0)
    {
      tmp+='<button class="bttn bttn-blue" onclick="UserInMedia('+mid+',1)">'+lang['manager']+'</button>';
    }
    tmp+='<button class="bttn bttn-blue" onclick="EditMediaWindow('+mid+');">'+lang['edit']+'</button>';
    tmp+='</div><div class="member-block scroll-pane"><ul class="members-list">';
    for(var i=0; i<json.users.length; i++)
    {
      var tmp_img=data_img['uid_'+json.users[i].id];
      if(tmp_img===undefined)
      {
        tmp_img="";
        uids_list+=json.users[i].id+','
      }
      var tmp_class='';
      if(json.users[i].id==id)
      {
        tmp_class='parl';
      }
      tmp+='<li class="member-item '+tmp_class+'" id="uid_'+json.users[i].id+'"><div class="member-img fl" id="ph_uid_'+json.users[i].id+'" style="background-image:url('+tmp_img+');" onclick="Profile('+json.users[i].id+');"></div><div class="member-info fl">';
      tmp+='<p class="member-name">'+json.users[i].name+'</p>';
      if(type==0)
      {
        tmp+='<p class="member-position">'+lang['party_rang_0']+'</p>';
      }
      else
      {
        tmp+='<p class="member-position">'+lang['editor_post']+'</p>';
      }
      tmp+='<p class="member-level">'+json.users[i].level+' '+lang['level'].toLowerCase()+'</p>';
      tmp+='</div>';
      if(type==0)
      {
        tmp+='<div class="member-actions fl" style="display:block"><button class="bttn bttn-green" onclick="SetRangMedia('+mid+','+json.users[i].id+',1);">'+lang['approve']+'</button><button class="bttn bttn-red" onclick="SetRangMedia('+mid+','+json.users[i].id+',0);">'+lang['reject']+'</button></div>';
      }
      else if(json.users[i].id!=id)
      {
        tmp+='<div class="member-actions fl" style="display:block"><button class="bttn bttn-red" onclick="SetRangMedia('+mid+','+json.users[i].id+',0);">'+lang['del_from_smi']+'</button></div>';
      }

      tmp+='<div class="clear"></div></li>';
    }
    tmp+='</ul></div></div>';
    $("#media_content").html(tmp);
    CloseProfile();
    jQuery('.scroll-pane').jScrollPane({showArrows: false, contentWidth:325});
    if(uids_list!=='')
    {
      VK.api("users.get", { user_ids:uids_list, fields:'photo_50', https:1 }, function (data) {
        for(var j=0; j<data.response.length; j++)
        {
          data_img['uid_'+data.response[j].id]=data.response[j].photo_50;
          $("#ph_uid_"+data.response[j].id).css('background-image', 'url('+data_img['uid_'+data.response[j].id]+')');
        }
      });
    }
  });
}




function SetRangMedia(mid, uid, rang)
{
  $.post('https://socforge.com/WP/api/SetRangMedia/?' + RandomGet(), { id: id, key: key, mid: mid, uid: uid, rang:rang }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      $("#uid_"+uid).remove();
    }
    else
    {
      Error(json.r);
    }
  });
}

function LeaveUnionWindow(uid)
{
  var c = {};
  c.html = lang['you_want_leave_union'];
  c.butt_n = [lang['cancel'], lang['leave_union']];
  c.butt_a = ['','LeaveUnion('+uid+');'];
  c.butt_c = ['white', 'red'];
  Window(c);
}




function LeaveUnion(uid)
{
  $.post('https://socforge.com/WP/api/LeaveUnion/?' + RandomGet(), { id: id, key: key, uid: uid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      UnionList(uid);
    }
    else
    {
      Error(json.r);
    }
  });
}


function LeaveMediaWindow(mid)
{
  var c = {};
  c.html = lang['you_want_leave_media'];
  c.butt_n = [lang['cancel'], lang['leave_media']];
  c.butt_a = ['','LeaveMedia('+mid+');'];
  c.butt_c = ['white', 'red'];
  Window(c);
}


function LeaveMedia(mid)
{
  $.post('https://socforge.com/WP/api/LeaveMedia/?' + RandomGet(), { id: id, key: key, mid: mid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      MediaProfile(mid);
    }
    else
    {
      Error(json.r);
    }
  });
}

function JoinMedia(mid)
{
  $.post('https://socforge.com/WP/api/JoinMedia/?' + RandomGet(), { id: id, key: key, mid: mid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      MediaProfile(mid);
    }
    else
    {
      Error(json.r);
    }
  });
}

function Info()
{
  $.post('https://socforge.com/WP/api/Info/?' + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    user.energy=json.user.energy;
    user.maxenergy=json.user.maxenergy;
    user.exp=json.user.exp;
    user.next_level=json.user.next_level;
    user.prev_level=json.user.prev_level;
    user.vip=json.user.vip;
    user.prefix=json.user.prefix;
    user.state=json.user.state;
    user.region=json.user.region;
    user.level=json.user.level;
    $("#cur_level").html(user.level);
    for(var i=1; i<=4; i++)
    {
      user['skill_'+i]=json.user['skill_'+i];
      $("#skill_val_"+i).html(user['skill_'+i]);
      if(user['skill_'+i]==100)
      {
        $("#up_skill_"+i).hide();
      }
    }
    user.rang_trans=json.user.rang_trans;
    user.rang_study=json.user.rang_study;

    user.time_skill=json.user.time_skill;
    user.skill_up=json.user.skill_up;
    user.skill_length=TimeSkill(user.skill_up);
    user.time=json.user.time;
    user.skill_progress=user.skill_length-(user.time_skill-user.time);
    user.skill_open=false;
    $('.skill-info').remove();
    user.step=json.user.step;
    if(user.skill_up==0)
    {
      $(".skills-item .plus").css("opacity", "1");
    }

    var tmp_media='';
    if(json.media.length==0)
    {
      tmp_media+='<p>'+lang['no_news']+'</p>';
    }
    for(var i=0; i<json.media.length; i++)
    {
      if (i==5) break;
      var tmp_art=json.media[i].title;
      tmp_media+='<p onclick="ViewArticle('+json.media[i].id+');">'+tmp_art+'</p>';
    }
    $(".news-block p").remove();
    $(".news-block").append(tmp_media);

    var tmp_region='<div class="fl">';
    tmp_region+='<p class="title" onclick="RegionProfile('+json.user.region+');">'+lang['reg_'+json.user.region]+'</p><ul class="block-list">';
    tmp_region+='<li>'+lang['index_war']+': <span class="red">'+json.user.rang_war+'/10</span></li>';
    tmp_region+='<li>'+lang['index_med']+': <span class="red">'+json.user.rang_med+'/10</span></li>';
    tmp_region+='<li>'+lang['index_study']+': <span class="red">'+json.user.rang_study+'/10</span></li>';
    tmp_region+='<li>'+lang['index_smi']+': <span class="red">'+json.user.rang_smi+'/10</span></li>';
    tmp_region+='<li>'+lang['index_trans']+': <span class="red">'+json.user.rang_trans+'/10</span></li>';
    var tmp_img='';
    if(data_img['gid_'+json.user.state_vk_group]!==undefined)
    {
      tmp_img='background-image:url('+data_img['gid_'+json.user.state_vk_group]+')';
    }
    tmp_region+='</ul></div><div class="fr"><div class="flag" style="'+tmp_img+'" id="info_flag"></div><p class="state-name" onclick=StateProfile('+json.user.state_region+')>'+json.user.state_name+'</p></div>';
    $(".region-block div").remove();
    $(".region-block").append(tmp_region);


    var tmp_parliament='';
    for(var i=0; i<json.wars.length; i++)
    {
      if(json.wars[i].attacker_id==0)
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['uprising']+': '+lang['reg_'+json.wars[i].attacker_region]+'</li>';
      }
      else if(json.user.state!=json.wars[i].attacker_id)
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['defence']+': '+lang['reg_'+json.wars[i].attacker_region]+' ('+json.states[json.wars[i].attacker_id]+')</li>';
      }
      else
      {
        tmp_parliament+='<li onclick="ShowWar('+json.wars[i].id+');">'+lang['attacking']+': '+lang['reg_'+json.wars[i].protecting_region]+' ('+json.states[json.wars[i].protecting_id]+')</li>';
      }

    }
    tmp_parliament+='</ul>';
    $(".laws-block ul").remove();
    $(".laws-block").append('<ul class="law-list">'+tmp_parliament+'</ul>');

    SetLoc("");
    CheckStep(7);

    try
    {
      if(json.user.state_vk_group!="")
      {
        VK.api("groups.getById", { group_id: json.user.state_vk_group, fields:'photo_200', https:1 }, function (data) {
          if(data.error==undefined)
          {
            data_img['gid_'+json.user.state_vk_group]=data.response[0].photo_200;
            $("#info_flag").css('background-image', 'url('+data_img['gid_'+json.user.state_vk_group]+')');
          }
        });
      }
    }
    catch(e)
    {

    }
  });
}

function UpdateMap(json)
{
  for(var i=0;i<json.states.length; i++)
  {
    states['color_'+json.states[i].id]=json.states[i].color;
    states['name_'+json.states[i].id]=json.states[i].name;
    states['regions_'+json.states[i].id]=[];
  }
  regions={};
  user.region=json.region;
  user.rang_trans=json.index_trans;
  $("#map_action").show().html(lang['choose_region_on_map']);
  for(var i=0;i<json.regions.length; i++)
  {
    if(json.regions[i].owner<0)
    {
      json.regions[i].owner=0;
    }
    if(user.step>0 && json.regions[i].id>=80 && json.regions[i].id<=82)
    {

    }
    else
    {
      regions['owner_'+Math.abs(json.regions[i].id)]=json.regions[i].owner;
    }

    $("#reg"+json.regions[i].id).attr('class', 'reg');
    if(json.regions[i].owner!=0)
    {
      if(user.step>0)
      {
        if(json.regions[i].id<80 || json.regions[i].id>82)
        {
          try{
            map.getReg(json.regions[i].id).setColor(states['color_'+json.regions[i].owner]);
          }
          catch(e)
          {
            console.log(json.regions[i].id + ' no in map');
          }
        }
      }
      else
      {
        try{
          map.getReg(json.regions[i].id).setColor(states['color_'+json.regions[i].owner]);
        }
        catch(e)
        {
          console.log(json.regions[i].id + ' no in map');
        }
      }
    }
    else
    {
      if(user.step==0 || (json.regions[i].id<80 || json.regions[i].id>82))
      {
        try{
          map.getReg(json.regions[i].id).setColor(0);
        }
        catch(e)
        {
          console.log(json.regions[i].id + ' no in map');
        }
      }
    }
    if(user.step>0)
    {
      if(json.regions[i].id<0)
      {
        regions['owner_'+(-json.regions[i].id).toString()]=json.regions[i].owner;
      }
    }
  }
  if(user.step>0)
  {
    try{
      map.getReg(80).setColor(7);
      map.getReg(82).setColor(7);
      map.getReg(81).setColor(10);
    }
    catch(e)
    {

    }
  }
  for(var tmp_war_id in wars) {
    try{
      console.log(wars[tmp_war_id].attacker_region+' '+wars[tmp_war_id].protecting_region)
      if(tmp_war_id.attacker_region != wars[tmp_war_id].protecting_region)
      {
        map.hidePPin(wars[tmp_war_id].attacker_region, wars[tmp_war_id].protecting_region);
      }
      else
      {
        map.hideUPin(wars[tmp_war_id].attacker_region);
      }
    }
    catch(e)
    {
      console.log(e);
    }
  }

  wars={};

  if(user.step>0)
  {
    var tmp_war_study={};
    tmp_war_study.attacker_region = 80;
    tmp_war_study.protecting_region = 81;
    wars['reg_80']=tmp_war_study;
    wars['reg_81']=tmp_war_study;
    map.showPPin(80, 81, {
      src: 'https://socforge.com/WP/img/map/war.png',
      align: true
    });
  }
  else
  {
    for(var i=0; i<json.wars.length; i++)
    {
      wars['reg_'+json.wars[i].attacker_region]=json.wars[i];
      wars['reg_'+json.wars[i].protecting_region]=json.wars[i];
      if(json.wars[i].attacker_region!=json.wars[i].protecting_region)
      {

        try{
          map.showPPin(json.wars[i].attacker_region, json.wars[i].protecting_region, {
            src: 'https://socforge.com/WP/img/map/war.png',
            align: true
          });
        }
        catch(e)
        {}

      }
      else
      {
        try{
          map.showUPin(json.wars[i].attacker_region, {
            src: 'https://socforge.com/WP/img/map/uprissing.png',
            align: true
          });
        }
        catch(e)
        {}
      }
    }
  }
	/*if(id==5057680)
	 {
	 for(var i=0; i<json.regions.length; i++)
	 {
	 try{
	 map.showMark(Math.abs(json.regions[i].id), 'red_mark', {
	 src: 'img/map/position.png'
	 });
	 }
	 catch(e)
	 {

	 }
	 }
	 } */

  try{
    map.showMark(Math.abs(user.region), 'red_mark', {
      src: 'https://socforge.com/WP/img/map/position.png'
    });
  }
  catch(e)
  {}

}

function MapView()
{
  $("#map_content").append('<div class="map-panel" style="display:none"></div>');
  try{
    //map.focus(71, 0, 0.15);
  }
  catch(e)
  {
    console.log('nofocus');
  }
  $.post("https://socforge.com/WP/api/World/?" + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    UpdateMap(json);
  });
}


function TripMap()
{
  try{
    //	map.focus(71, 0, 0.15);
  }
  catch(e)
  {
    console.log('nofocus');
  }
}

function TripWindow(rid)
{
  if(user.region==rid)
  {
    return;
  }
  var c = {};
  c.html = lang['drive_text']+' <span class="blue">'+(11-user.rang_trans) +' '+lang['min']+' '+lang['and']+' '+ (11-user.rang_trans) +'000 RUB</span>';
  c.butt_n = [lang['cancel'], lang['drive']];
  c.butt_a = ['','Trip('+rid+');'];
  c.butt_c = ['white', 'red'];
  Window(c);
}



function Trip(rid)
{
  $.post("https://socforge.com/WP/api/Trip/?" + RandomGet(), { id: id, key: key, rid: rid }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      Chat();
      user.rang_trans=json.rang;
      if(user.step==13)
      {
        CheckStep(14);
        map.hideMark(80);
      }
      else if(json.r==1)
      {
        SMessage(lang['success_trip_time'].replace('%s',lang['reg_'+rid]));
      }
      else
      {
        SMessage(lang['success_trip']+' '+lang['reg_'+rid]);
      }
      try
      {
        TripMap();

        map.hideMark(Math.abs(user.region));
        map.showMark(Math.abs(rid), 'red_mark', {
          src: 'https://socforge.com/WP/img/map/position.png'
        });
      }
      catch(e)
      {

      }
      user.region=rid;

      if(loc_hash.substr(0,3)==='war')
      {
        ShowWar(loc_hash.substr(3));
      }
      else if(loc_hash==='state')
      {
        State();
      }
      else
      {
        RegionProfile(rid);
      }
    }
    else
    {
      if(json.r==-181)
      {
        SMessage(lang['err_181'].replace('%s','<b>'+ToTime(json.time)+'</b>'));
      }
      else
      {
        Error(json.r);
      }
    }
  });
}

var wars={};


function SendMessage() {
  if (timeblockchat) {
    // Error(164);
    // return;
  }
  var message = $("#msg-input").val();
  if (message.length < 2) {
    Error(120);
    return;
  }
  else {
    if (FindCaps(message)) {
      return;
    }
    timeblockchat = true;
    sended = true;
    chatid++;
    $.post("https://socforge.com/WP/api/send/?" + RandomGet(), { message: message, key: key, id: id }, function (data) {
      var json = jQuery.parseJSON(data);
      if (json.r < 0) {
        if(json.r==-196)
        {
          SMessage(lang['err_196']+'<br><span class="blue">'+json.reason+'</span><br>'+ lang['remaining']+' '+ToTime(json.time));
          return;
        }
        Error(json.r);
        return;
      }
      else {
        tmp_name=user.name;
        if(user.prefix!="")
        {
          tmp_name="["+user.prefix+"] "+user.name;
        }
        var bold_start="";
        var bold_end="";
        if(user.vip==1)
        {
          bold_start="<b>";
          bold_end="</b>";
        }
        var name_color='';
        if( user.color>0 &&  user.color<=20)
        {
          name_color='text-color-'+user.color;
        }
        chat_area.prepend('<li class="msg-item"><span class="msg-time">' + ToDate(json.r) + '</span>'+bold_start+'<span class="msg-name '+name_color+'" onclick="NameToChat(\'' + user.name + '\')" ondblclick="Profile('+id+')">'+tmp_name +': </span>'+bold_end+'<span class="msg-text">' + AddLinks(message) + '</span></li>');

        $("#msg-input").val('').focus();
      }
    });
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function NameToChat(name) {
  name=name.replace('<b>','').replace('</b>','');
  $("#msg-input").val(name+', ')
  $("#msg-input").focus();
}

var timeblockchat=false;
function Chat() {
  $.post("https://socforge.com/WP/api/chat/?" + RandomGet(), { id: id, key: key }, function (data) {

    timeblockchat = false;
    var json = jQuery.parseJSON(data);
    var tmp_chat='';
    for (var i = json.chat.length - 1; i >= 0; i--) {
      if (i == 0) {
        chatid = json.chat[i].id;
      }
      var name_color='';
      if(json.chat[i].color>0 && json.chat[i].color<=20)
      {
        name_color='text-color-'+json.chat[i].color;
      }
      var moder='';
      if(user.moder>0)
      {
        moder='<span class="msg-ban" onclick="ComplaintWindow('+json.chat[i].id+',\'' + json.chat[i].name + '\');">x</span>';
      }
      var tmp='<li class="msg-item">'+moder+'<span class="msg-time">'+ToDate(json.chat[i].time)+'</span><span class="msg-name '+name_color+'" onclick="NameToChat(\'' + json.chat[i].name.replace("'","&#39;") + '\')" ondblclick="Profile('+json.chat[i].owner+')">'+json.chat[i].name +': </span><span class="msg-text">' + AddLinks(json.chat[i].message) + '</span></li>';
      tmp_chat=tmp + tmp_chat;
    }
    chat_area.html(tmp_chat);
    tmp='';
    var html='';
    for (var i = 0; i < json.users.length; i++) {
      tmp += '<li class="player" onclick="Profile('+json.users[i].id+')">';
      if(json.users[i].last_action < 300)
      {
        tmp+='<i class="status"></i>';
      }
      tmp+=json.users[i].name + '</li>';
    }
    online_area.html(tmp);
    $('.scroll-pane').jScrollPane();
  });
}

var newMessages=0;
var cur_update=0;
function Update() {
  $.post("https://socforge.com/WP/api/update/?" + RandomGet(), { id: id, key: key, update: cur_update, chatid: chatid }, function (data) {
    if(session_lock)
    {
      return;
    }
    var json = jQuery.parseJSON(data);
    cur_update++;
    timeblockchat=false;
    if (json.chat.length > 0) {
      if (chatid >= json.chat[0].id) {
        return;
      }
      chatid = json.chat[0].id;
    }
    newMessages += json.chat.length;
    var tmp = '';
    for (var i = json.chat.length - 1; i >= 0; i--) {
      if(json.chat[i].owner==id)
      {
        continue;
      }
      var name_color='';
      if(json.chat[i].color>0 && json.chat[i].color<=20)
      {
        name_color='text-color-'+json.chat[i].color;
      }
      var moder='';
      if(user.moder>0)
      {
        moder='<span class="msg-ban" onclick="ComplaintWindow('+json.chat[i].id+',\'' + json.chat[i].name + '\');">x</span>';
      }
      tmp+='<li class="msg-item">'+moder+'<span class="msg-time">'+ToDate(json.chat[i].time)+'</span><span class="msg-name '+name_color+'" onclick="NameToChat(\'' + json.chat[i].name.replace("'","&#39;") + '\')" ondblclick="Profile('+json.chat[i].owner+')">'+json.chat[i].name +': </span><span class="msg-text">' + AddLinks(json.chat[i].message) + '</span></li>';
    }
    if(tmp!='')
    {
      chat_area.prepend(tmp);
    }

    if(cur_update % 3 !=1)
    {
      return;
    }
    tmp='';
    if(cur_update % 30 == 1)
    {
      for (var i = 0; i < json.users.length; i++) {
        tmp += '<li class="player" onclick="Profile('+json.users[i].id+')">';
        if(json.users[i].last_action < 300)
        {
          tmp+='<i class="status"></i>';
        }
        tmp+=json.users[i].name + '</li>';
      }
      online_area.html(tmp);
    }
    tmp='';

    var html='';


    user.cash=json.user.cash;
    user.gold=json.user.gold;
    user.next_level=json.user.next_level;
    user.prev_level=json.user.prev_level;
    user.vip=json.user.vip;

    if(json.user.last_donate!="")
    {
      var tmp_arr=json.user.last_donate.split("|");
    }

    if(json.user.new_messages>0)
    {
      $(".msg .msg-num").html(json.user.new_messages).css('display', 'inline');
    }
    else
    {
      $(".msg .msg-num").css('display', 'none');
    }
    if(json.user.new_party>0)
    {
      $(".party .msg-num").html('!').css('display', 'inline');
    }
    else
    {
      $(".party .msg-num").css('display', 'none');
    }
    if(user.vip==1)
    {
      user.maxenergy=250;
      $("#energy_strip").progressbar({
        value: user.energy*100/user.maxenergy
      });
      $("#vip_label").css('background','#c54a49');
    }
    else
    {
      user.maxenergy=200;
      $("#energy_strip").progressbar({
        value: user.energy*100/user.maxenergy
      });
      $("#vip_label").css('background','none');
    }
    $("#total-rub").html(ToNumber(user.cash)+' RUB +');
    $("#total-g").html(ToNumber(user.gold)+' G +');
    SetEnergy(json.user.energy);
    SetExp(json.user.exp);
    user.time=json.user.time;
    if(json.user.time_skill>0)
    {
      user.time_skill=json.user.time_skill;
      user.skill_progress=user.skill_length-(user.time_skill-user.time);
      if(user.time<=user.time_skill)
      {
        $('#progressbar').val(user.skill_progress);
      }
      else
      {
        EndSkillUp();
      }
    }
    $('.players-block .scroll-pane').jScrollPane();
    $('.chat-block .scroll-pane').jScrollPane();

  });
}


function EndSkillUp()
{
  user['skill_'+user.skill_up]++;
  $("#skill_val_"+user.skill_up).html(user['skill_'+user.skill_up]);
  user.time_skill=0;
  user.skill_up=0;
  for(var i=1; i<=4; i++)
  {
    if(user['skill_'+i]<100)
    {
      $('#skill_'+i+' .plus').css('opacity', 1);
    }
  }
  clearInterval(user.skill_timer);
  user.info_new=true;
  $('.progress-skills').remove();
}


function UpdateSkill()
{
  user.skill_progress++;
  if(user.skill_progress==user.skill_length)
  {
    EndSkillUp();
  }
  $( ".progress-skills .progressbar" ).progressbar({
    value: user.skill_progress*100/user.skill_length
  });
  $('#time_left').html(ToTime(user.skill_length-user.skill_progress));
}

function ctrlEnterChat(event) {
  if ((event.ctrlKey) && ((event.keyCode == 0xA) || (event.keyCode == 0xD))) {
    SendMessage();
  }
  else if ((event.keyCode == 0xA) || (event.keyCode == 0xD)) {
    SendMessage();
  }
}


function ToDate(date) {
  var d = new Date();
  if (date != 0) {
    d.setTime(date * 1000);
  }
  d.toUTCString();
  var tmph = d.getHours();
  var tmpm = d.getMinutes();
  if (tmph < 10) {
    tmph = '0' + tmph;
  }
  if (tmpm < 10) {
    tmpm = '0' + tmpm;
  }
  return tmph + ':' + tmpm;
}


var up_skill=false;
function UpSkill(sid)
{
  if(user.step>0)
  {
    if(sid!=1 && user.step==7)
    {
      Error(138);
      return;
    }
    if(sid!=4 && user.step==19)
    {
      Error(138);
      return;
    }
    if(user.step!=7 && user.step!=19)
    {
      Error(138);
      return;
    }
  }
  if(user.time_skill>0)
  {
    return;
  }
  $('.rub_up').remove();
  $('.gold_up').remove();
  $('#up_skill_'+sid).hide();
  var skill_val=user['skill_'+sid];
  var rub_price=2000*skill_val;
  var gold_price=10+10*(~~(skill_val/5));
  var time=TimeSkill(sid);
  var tmp='<div class="skill-info">';
  tmp+='<p class="rub" onclick="UpSkillAction('+sid+',1);">'+ToNumber(rub_price)+' RUB, '+lang['duration']+': '+ToTime(time)+'</p>';
  tmp+='<p class="g" onclick="UpSkillAction('+sid+',2);">'+gold_price+' G, '+lang['instant_up']+'</p>';
  tmp+='</div>';
  $('.skill-info').remove();
  $('#skill_'+sid).append(tmp);
  user.skill_open=true;
  $('#skill_info').remove();
  $(".skills-item .plus").css("opacity", "1");
  $("#skill_"+sid+" .plus").css("opacity", "0");
}



function UpSkillAction(sid, type)
{
  if(user.step>0)
  {
    if(type!=1 && user.step==7)
    {
      Error(138);
      return;
    }
    if(type!=2 && user.step==19)
    {
      Error(138);
      return;
    }
  }
  $.post("https://socforge.com/WP/api/UpSkill/?" + RandomGet(), { id: id, key: key, sid: sid, type:type }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r<0)
    {
      Error(json.r);
      return;
    }
    $('.skill-info').remove();
    user.skill_open=false;
    if(type==1)
    {
      user.time_skill=json.r;
      user.up_skill=sid;
      user.skill_length=TimeSkill(sid);
      var tmp='';
      tmp+='<div class="progress-skills"><div class="progressbar"></div><div class="progress-info"><div class="progress-text fl"><p>'+lang['up_skill']+'</p><p>'+lang['remaining']+': <span class="red" id="time_left">'+ToTime(user.skill_length)+'</span></p></div>';
      tmp+='<button onclick="CancelSkillUpWindow();" class="bttn bttn-red fr">'+lang['cancel']+'</button></div></div>';
      $('.skills-block').append(tmp);
      user.skill_timer=setInterval(UpdateSkill, 1000);
      user.skill_progress=0;
      user.skill_up=sid;
      for(var i=1; i<=4; i++)
      {
        $('#skill_'+i+' .plus').css('opacity', 0);
      }
    }
    else
    {
      $('#skill_val_'+sid).html(json.r);
      user['skill_'+sid]=json.r;
      for(var i=1; i<=4; i++)
      {
        $('#skill_'+i+' .plus').css('opacity', 1);
      }
    }
    if(user.step==7)
    {
      CheckStep(8);
    }
    if(user.step==19)
    {
      CheckStep(20);
    }
    cur_update=0;
    Update();

  });
}

function CancelSkillUp()
{
  $.post("https://socforge.com/WP/api/CancelSkill/?" + RandomGet(), { id: id, key: key }, function (data) {
    var json = jQuery.parseJSON(data);
    if(json.r>0)
    {
      user.time_skill=0;
      user.skill_up=0;
      clearInterval(user.skill_timer);
      $('.progress-skills').remove();
      for(var i=1; i<=4; i++)
      {
        if(user['skill_'+i]<100)
        {
          $('#skill_'+i+' .plus').css('opacity', 1);
        }
      }
    }
  });
}

function CancelSkillUpWindow()
{
  var c={};
  c.html = lang['stop_skill_up'];
  c.butt_n = [lang['wait'],lang['break']];
  c.butt_a = ['','CancelSkillUp();'];
  c.butt_c = ['white','red'];
  Window(c);

}

function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}


//start init
InitApp();
