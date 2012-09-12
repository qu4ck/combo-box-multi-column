/*
 * isoweb Shoutbox 0.9
 *
 * Copyleft (c) 2012 Airlangga bayu seto (www.iso.web.id)
 * Date: 2012-01-01 20:53:17 -0644 (Mon, 01 Jan 2012) $
 *
 */
 
$(function(){
    $('tr#rows').live('click',function(event){
        var nim = $(this).attr('key');
        $("#nim").val([nim]);
    });
    
    $("#btn_arrow").click(function(e){
        e.preventDefault();
        $.ajax({
             url		: "data.json"
            ,type		: "get"
            ,dataType	: "json"
            ,success	: function(data){
                var combo = "<table name=\"list_combo\" cellpadding=\"2\" cellspacing=\"2\">";
                $.each(data,function(k,v){
                    combo +="<tr id=\"rows\" key=\""+v.id+"\"><td>"+v.id+"</td><td>"+v.name+"</td></tr>";
                });
                combo +="</table>";
                $("#show_multicombo").html(combo).fadeIn();
            }
            ,error		: function(request, error){
                alert("Tidak dapat dikerjakan karena "+ error);
            }
        });					
        return false;
    });
    $("body #container").click(function(){
        $("#show_multicombo").fadeOut();					
    });
    
});
