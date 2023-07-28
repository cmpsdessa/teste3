var wms_layers = [];

var format_LimiteStioIranita_0 = new ol.format.GeoJSON();
var features_LimiteStioIranita_0 = format_LimiteStioIranita_0.readFeatures(json_LimiteStioIranita_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteStioIranita_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteStioIranita_0.addFeatures(features_LimiteStioIranita_0);
var lyr_LimiteStioIranita_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteStioIranita_0, 
                style: style_LimiteStioIranita_0,
                interactive: true,
                title: '<img src="styles/legend/LimiteStioIranita_0.png" /> Limite Sítio Iranita'
            });

lyr_LimiteStioIranita_0.setVisible(true);
var layersList = [lyr_LimiteStioIranita_0];
lyr_LimiteStioIranita_0.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Area_ha': 'Area_ha', });
lyr_LimiteStioIranita_0.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Area_ha': 'TextEdit', });
lyr_LimiteStioIranita_0.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Area_ha': 'inline label', });
lyr_LimiteStioIranita_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});