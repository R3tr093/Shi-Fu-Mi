$(function(){
    
    /** CONSOLE SECTION **/
    
    var consWrap = $('#wrapCons');
    var consMsg = $('#consMsg');
    var closeCon = $('#closeCon');
    
    
        function showCons(param)
    {
        $(consWrap).animate({top: "+85%" },1800);
        $(consMsg).text(param)
    }
    
    function hideCons()
    {
        $(consWrap).animate({top: "+110%" },1800);
        
    }
    
    $(closeCon).on("click",function(){
        hideCons();
    })
    
    
    var consStyle = ["alert alert-primary","alert alert-secondary","alert alert-success","alert alert-danger","alert alert-warning","alert alert-info","alert alert-light","alert alert-dark" ]; 
    
    var consRandomStyle;
    
    function getRandomStyle() {
        
        consRandomStyle =  Math.floor(Math.random() * Math.floor(consStyle.length));
        $(consWrap).attr('class',"col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-xs-12" + consStyle[consRandomStyle]);

    }
    


    
    
    setTimeout(function(){
        getRandomStyle();
        showCons("Pierre, Papier, Ciseaux.");
    },2000)
    
    setTimeout(function(){
       hideCons();
    },10000)
    
    
    
    
    

    
    
    
    //** LOGO SECTION **//
    
    var i = 0;
    
    //SWIPE ON CLICK
    $('.navbar').on('click',function(){
        
        i++;
        
        $('.navbar').css('background','url(../IMG/banner' + i + '.png) white  90% no-repeat')
        
        if (i >= 3)   
        {
            i = 0;
        }
        
    })
    
    //SWIPE ON TIMER
    
    setTimeout(function(){
        
                i++;
        
        $('.navbar').css('background','url(../IMG/banner' + i + '.png) white  90% no-repeat')
        
        if (i >= 3)   
        {
            i = 0;
        }
        
    },30000)
    
    
    //BREAK
    
    
    // Carrying SHIFUMI
    
    var Stone = $('#Stone');
    var Paper = $('#Paper');
    var Scissor = $('#Scissor');
    
    var userloose = 0;
    
    var userwin = 0;
    
    var equals = 0;
    
    var Score = 0;
    
    
    

    
    
    //Set an array for the cpu
    
        var resultLuck = ["Pierre","Papier","Ciseaux"];
    
    
        var Random =  Math.floor(Math.random() * Math.floor(resultLuck.length));
        var cpuValue;
        var userValue;
    
    
    // Set ranking function - This function define the actual rank of user
    
    function setRanking ()
    {
                if (Score > 49)
            {
                
                $("#rank").text("Votre rang : Chanceux");
            }
        
        
        if (Score > 149)
            {
                
                $("#rank").text("Votre rang : Winner");
            }
        
        if (Score > 299)
            {
                
                $("#rank").text("Votre rang : Imbattable");
            }
        
        if (Score > 599)
            {
                
                $("#rank").text("Votre rang : Maître");
            }
        
        
        if (Score === 0 )
            {
                $("#rank").text("Votre rang : Nul");
            }
        
        if (Score < 0 )
            {
                $("#rank").text("Votre rang : Malchanceux.");
            }
        
        if (Score < -49 )
            {
                $("#rank").text("Votre rang : Looser.");
            }
        
        if (Score < -299 )
            {
                $("#rank").text("Votre rang : Hardcore Looser.");
            }
    }
    
    
    //React to the click on any buttons 

    $(Stone).on('click',function(){

         
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
      
        
         $('#playerIcon').attr('src','../SHI-FU-MI/IMG/stone.png')
        
        
        //Generate an value for CPU
        
        Random =  Math.floor(Math.random() * Math.floor(resultLuck.length));
        
        cpuValue = resultLuck[Random];
        
        
        if (Random === 0)
            {
                
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/stone.png')
                $('#result').text("Égalité");
                equals++;
               
                
            }
        
        if (Random === 1)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/Paper-icon.png')
                $('#result').text("Perdu");
                userloose++;
                Score = Score - 50;
            }
        
        if (Random === 2)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/scissors.png')
                $('#result').text("Gagnez");
                userwin++;
                Score = Score + 50;
            }
        
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
        $("#r1").text("Score total : " + Score + " points.")
        setRanking();
        
        $('#info').text("")
        $('#info').text(cpuValue)
  
    })
    
    $(Paper).on('click',function(){
      
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
        
        
         $('#playerIcon').attr('src','../SHI-FU-MI/IMG/Paper-icon.png')
           
        //Generate an value for CPU
        
        Random =  Math.floor(Math.random() * Math.floor(resultLuck.length));
        
        cpuValue = resultLuck[Random];
        
            if (Random === 0)
            {
                
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/stone.png')
                $('#result').text("Gagnez");
                userwin++;
                Score = Score + 50;
                
            }
        
        if (Random === 1)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/Paper-icon.png')
                $('#result').text("Égalité");
                equals++;
                allGame++;
            }
        
        if (Random === 2)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/scissors.png')
                $('#result').text("Perdu");
                userloose++;
                Score = Score - 50;
                
            }
        
        $('#info').text("")
        $('#info').text(cpuValue)

        
        
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
        setRanking();
        


        
        $("#r1").text("Score total : " + Score + " points.")
        
       


        
    })
    
    $(Scissor).on('click',function(){
        
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
       
         userValue = "Ciseaux";
        
        
        $('#playerIcon').attr('src','../SHI-FU-MI/IMG/scissors.png')
        
        //Generate an value for CPU
        
        Random =  Math.floor(Math.random() * Math.floor(resultLuck.length));
        
        cpuValue = resultLuck[Random];
        
       
        if (Random === 0)
            {
                
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/stone.png')
                $('#result').text("Perdu");
                userloose++;
                Score = Score - 50;
                
            }
        
        if (Random === 1)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/Paper-icon.png')
                $('#result').text("Gagnez");
                userwin++;
                Score = Score + 50;
            }
        
        if (Random === 2)
            {
                $('#cpuIcon').attr('src','../SHI-FU-MI/IMG/scissors.png')
                $('#result').text("Égalité");
                equals++;
              
            }
        
        $('#info').text("")
        $('#info').text(cpuValue)
        
        $('#winTxt').text("Vous avez gagnez : " + userwin + " manches.")
        $('#looseTxt').text("Vous avez perdu : " + userloose + " manches.")
        setRanking();
        $("#r1").text("Score total : " + Score + " points.")

        
    })
    
    
})