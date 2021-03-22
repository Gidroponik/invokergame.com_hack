
var spammer = setInterval(() => 
{
$('.speechboxTR img').each(function()
{
  autoclicker($(this).attr('src'));
});
},0);

function autoclicker(now)
{
	if(now == 'images/spells/cold_snap.png')
	{
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyInvoke);
	   PressKey(Config.keySpell1);
	}
	if(now == 'images/spells/ghost_walk.png') 
	{
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyWex);
	   PressKey(Config.keyInvoke);
	   PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/ice_wall.png') 
	{
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyQuash);
	   PressKey(Config.keyExort);
	   PressKey(Config.keyInvoke);
	   PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/emp.png') 
	{
		PressKey(Config.keyWex);
		PressKey(Config.keyWex);
		PressKey(Config.keyWex);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/tornado.png')
	{
		PressKey(Config.keyWex);
		PressKey(Config.keyWex);
		PressKey(Config.keyQuash);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/alacrity.png')
	{
		PressKey(Config.keyWex);
		PressKey(Config.keyWex);
		PressKey(Config.keyExort);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/sun_strike.png') 
	{
		PressKey(Config.keyExort);
		PressKey(Config.keyExort);
		PressKey(Config.keyExort);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/forge_spirit.png')
	{
		PressKey(Config.keyExort);
		PressKey(Config.keyExort);
		PressKey(Config.keyQuash);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/chaos_meteor.png')
	{
		PressKey(Config.keyExort);
		PressKey(Config.keyExort);
		PressKey(Config.keyWex);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
	if(now == 'images/spells/deafening_blast.png')
	{
		PressKey(Config.keyQuash)
		PressKey(Config.keyWex);
		PressKey(Config.keyExort);
	    PressKey(Config.keyInvoke);
	    PressKey(Config.keySpell1)
	}
}
