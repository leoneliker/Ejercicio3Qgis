ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-3505247.202240, 1741189.971941, 2788632.484781, 6427457.488440]);
var wms_layers = [];

var format_Comunidadesautonomas_0 = new ol.format.GeoJSON();
var features_Comunidadesautonomas_0 = format_Comunidadesautonomas_0.readFeatures(json_Comunidadesautonomas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunidadesautonomas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Comunidadesautonomas_0.addFeatures(features_Comunidadesautonomas_0);
var lyr_Comunidadesautonomas_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Comunidadesautonomas_0, 
                style: style_Comunidadesautonomas_0,
                popuplayertitle: 'Comunidades autonomas',
                interactive: true,
                title: '<img src="styles/legend/Comunidadesautonomas_0.png" /> Comunidades autonomas'
            });
var format_Parquesnacionales_1 = new ol.format.GeoJSON();
var features_Parquesnacionales_1 = format_Parquesnacionales_1.readFeatures(json_Parquesnacionales_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parquesnacionales_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parquesnacionales_1.addFeatures(features_Parquesnacionales_1);
var lyr_Parquesnacionales_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parquesnacionales_1, 
                style: style_Parquesnacionales_1,
                popuplayertitle: 'Parques nacionales',
                interactive: true,
                title: '<img src="styles/legend/Parquesnacionales_1.png" /> Parques nacionales'
            });
var format_RiosEspaa_2 = new ol.format.GeoJSON();
var features_RiosEspaa_2 = format_RiosEspaa_2.readFeatures(json_RiosEspaa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RiosEspaa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosEspaa_2.addFeatures(features_RiosEspaa_2);
var lyr_RiosEspaa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosEspaa_2, 
                style: style_RiosEspaa_2,
                popuplayertitle: 'Rios España',
                interactive: true,
                title: '<img src="styles/legend/RiosEspaa_2.png" /> Rios España'
            });

lyr_Comunidadesautonomas_0.setVisible(true);lyr_Parquesnacionales_1.setVisible(true);lyr_RiosEspaa_2.setVisible(true);
var layersList = [lyr_Comunidadesautonomas_0,lyr_Parquesnacionales_1,lyr_RiosEspaa_2];
lyr_Comunidadesautonomas_0.set('fieldAliases', {'ID': 'ID', 'TIPO_0101': 'TIPO_0101', 'CODIGO_INE': 'CODIGO_INE', 'ETIQUETA': 'Nombre', 'COD_INE': 'COD_INE', 'TOT_FOR': 'TOT_FOR', 'ARB': 'ARB', 'NO_ARB': 'NO_ARB', });
lyr_Parquesnacionales_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Declaracio': 'Declaracio', 'Reclasific': 'Reclasific', 'Ampliacion': 'Ampliacion', 'Fecha de d': 'Fecha de d', 'Modificaci': 'Modificaci', });
lyr_RiosEspaa_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Texto': 'Texto', 'Longitud': 'Longitud', 'Categoria': 'Categoria', 'Imagen': 'Imagen', 'Shape_Leng': 'Shape_Leng', });
lyr_Comunidadesautonomas_0.set('fieldImages', {'ID': 'TextEdit', 'TIPO_0101': 'TextEdit', 'CODIGO_INE': 'TextEdit', 'ETIQUETA': 'TextEdit', 'COD_INE': 'Range', 'TOT_FOR': 'TextEdit', 'ARB': 'TextEdit', 'NO_ARB': 'TextEdit', });
lyr_Parquesnacionales_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Declaracio': 'TextEdit', 'Reclasific': 'TextEdit', 'Ampliacion': 'TextEdit', 'Fecha de d': 'TextEdit', 'Modificaci': 'TextEdit', });
lyr_RiosEspaa_2.set('fieldImages', {'OBJECTID': 'Range', 'Texto': 'TextEdit', 'Longitud': 'Range', 'Categoria': 'TextEdit', 'Imagen': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Comunidadesautonomas_0.set('fieldLabels', {'ID': 'hidden field', 'TIPO_0101': 'hidden field', 'CODIGO_INE': 'hidden field', 'ETIQUETA': 'inline label - always visible', 'COD_INE': 'hidden field', 'TOT_FOR': 'hidden field', 'ARB': 'hidden field', 'NO_ARB': 'hidden field', });
lyr_Parquesnacionales_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Declaracio': 'no label', 'Reclasific': 'no label', 'Ampliacion': 'no label', 'Fecha de d': 'no label', 'Modificaci': 'no label', });
lyr_RiosEspaa_2.set('fieldLabels', {'OBJECTID': 'no label', 'Texto': 'no label', 'Longitud': 'no label', 'Categoria': 'no label', 'Imagen': 'no label', 'Shape_Leng': 'no label', });
lyr_RiosEspaa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});