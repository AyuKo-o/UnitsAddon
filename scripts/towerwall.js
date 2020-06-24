const towerwall = extendContent(ChargeTurret, "thorium-towerwall", {
  load(){
    this.super$load();
    
    this.region = Core.atlas.find(this.name);
    this.baseRegion = Core.atlas.find("units-addon-thorium-wallsupport");
  },
  generateIcons: function(){
    return [
      Core.atlas.find("units-addon-thorium-wallsupport"),
      Core.atlas.find(this.name)
  ];},
  draw: function(tile){
    Draw.rect(this.baseRegion, tile.drawx(), tile.drawy());
  }
});