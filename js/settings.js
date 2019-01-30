$(document).on('click', '#setting-button',  function(){
    if ($("#setting-button i").hasClass("fa-cogs")){
      $("#options-setting").addClass("move-right");
      $("#setting-button i").removeClass("fa-cogs");
      $("#setting-button i").addClass("fa-times");
    }
    else
    {
      $("#options-setting").removeClass("move-right");
      $("#setting-button i").removeClass("fa-times");
      $("#setting-button i").addClass("fa-cogs");
    }
  });

  var current_color = "vanilla";
  var current_navbar = "white";
   
  $(document).on('click', '#vanilla',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/vanilla.css" type="text/css" />');
    current_color = "vanilla";
  });

  $(document).on('click', '#chocolate',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/chocolate.css" type="text/css" />');
    current_color = "chocolate";
  }); 

  $(document).on('click', '#cherry',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/cherry.css" type="text/css" />');
    current_color = "cherry";
  });

  $(document).on('click', '#mint',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/mint.css" type="text/css" />');
    current_color = "mint";
  });

  $(document).on('click', '#strawberries',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/strawberries.css" type="text/css" />');
    current_color = "strawberries";
  });

  $(document).on('click', '#lavan',  function(){
    $('link[rel*=skin]').remove();
    $('head').append('<link rel="stylesheet skin" href="css/skins/lavan.css" type="text/css" />');
    current_color = "lavan";
  });

  // PATTERNS
  //----------------------------------------------------------------------------------

  $(document).on('click', '#pattern-1',  function(){
    $("#pattern-1 span").addClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").removeClass("active");
    
    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-1.css" type="text/css" />');
  });
  
  $(document).on('click', '#pattern-2',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").addClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").removeClass("active");
    
    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-2.css" type="text/css" />');
  });
  
  $(document).on('click', '#pattern-3',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").addClass("active");
    $("#pattern-none span").removeClass("active");
    
    $('link[rel*=pattern]').remove();
    $('head').append('<link rel="stylesheet pattern" href="css/skins/pattern-3.css" type="text/css" />');
  });
  
  $(document).on('click', '#pattern-none',  function(){
    $("#pattern-1 span").removeClass("active");
    $("#pattern-2 span").removeClass("active");
    $("#pattern-3 span").removeClass("active");
    $("#pattern-none span").addClass("active");
    
    $('link[rel*=pattern]').remove();
  });
