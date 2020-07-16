var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FincaRajamancera4227has_1 = new ol.format.GeoJSON();
var features_FincaRajamancera4227has_1 = format_FincaRajamancera4227has_1.readFeatures(json_FincaRajamancera4227has_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FincaRajamancera4227has_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FincaRajamancera4227has_1.addFeatures(features_FincaRajamancera4227has_1);
var lyr_FincaRajamancera4227has_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FincaRajamancera4227has_1, 
                style: style_FincaRajamancera4227has_1,
                interactive: false,
                title: '<img src="styles/legend/FincaRajamancera4227has_1.png" /> Finca "Rajamancera"- 42,27 has'
            });
var format_Naves_2 = new ol.format.GeoJSON();
var features_Naves_2 = format_Naves_2.readFeatures(json_Naves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naves_2.addFeatures(features_Naves_2);
var lyr_Naves_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Naves_2, 
                style: style_Naves_2,
                interactive: false,
                title: '<img src="styles/legend/Naves_2.png" /> Naves'
            });
var format_Curvasdenivel_3 = new ol.format.GeoJSON();
var features_Curvasdenivel_3 = format_Curvasdenivel_3.readFeatures(json_Curvasdenivel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvasdenivel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvasdenivel_3.addFeatures(features_Curvasdenivel_3);
var lyr_Curvasdenivel_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvasdenivel_3, 
                style: style_Curvasdenivel_3,
                interactive: false,
                title: '<img src="styles/legend/Curvasdenivel_3.png" /> Curvas de nivel'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_FincaRajamancera4227has_1.setVisible(true);lyr_Naves_2.setVisible(true);lyr_Curvasdenivel_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FincaRajamancera4227has_1,lyr_Naves_2,lyr_Curvasdenivel_3];
lyr_FincaRajamancera4227has_1.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_uom': 'areaValue_uom', 'beginLifespanVersion': 'beginLifespanVersion', 'endLifespanVersion': 'endLifespanVersion', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCadastralReference': 'nationalCadastralReference', 'pos': 'pos', });
lyr_Naves_2.set('fieldAliases', {'gml_id': 'gml_id', 'beginLifespanVersion': 'beginLifespanVersion', 'conditionOfConstruction': 'conditionOfConstruction', 'beginning': 'beginning', 'end': 'end', 'endLifespanVersion': 'endLifespanVersion', 'informationSystem': 'informationSystem', 'reference': 'reference', 'localId': 'localId', 'namespace': 'namespace', 'horizontalGeometryEstimatedAccuracy': 'horizontalGeometryEstimatedAccuracy', 'horizontalGeometryEstimatedAccuracy_uom': 'horizontalGeometryEstimatedAccuracy_uom', 'horizontalGeometryReference': 'horizontalGeometryReference', 'referenceGeometry': 'referenceGeometry', 'currentUse': 'currentUse', 'numberOfBuildingUnits': 'numberOfBuildingUnits', 'numberOfDwellings': 'numberOfDwellings', 'numberOfFloorsAboveGround': 'numberOfFloorsAboveGround', 'documentLink': 'documentLink', 'format': 'format', 'sourceStatus': 'sourceStatus', 'officialAreaReference': 'officialAreaReference', 'value': 'value', 'value_uom': 'value_uom', });
lyr_Curvasdenivel_3.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'CLOSED_CON': 'CLOSED_CON', });
lyr_FincaRajamancera4227has_1.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'Range', 'areaValue_uom': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCadastralReference': 'TextEdit', 'pos': 'TextEdit', });
lyr_Naves_2.set('fieldImages', {'gml_id': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'conditionOfConstruction': 'TextEdit', 'beginning': 'TextEdit', 'end': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'informationSystem': 'TextEdit', 'reference': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'horizontalGeometryEstimatedAccuracy': 'TextEdit', 'horizontalGeometryEstimatedAccuracy_uom': 'TextEdit', 'horizontalGeometryReference': 'TextEdit', 'referenceGeometry': 'CheckBox', 'currentUse': 'TextEdit', 'numberOfBuildingUnits': 'Range', 'numberOfDwellings': 'Range', 'numberOfFloorsAboveGround': 'TextEdit', 'documentLink': 'TextEdit', 'format': 'TextEdit', 'sourceStatus': 'TextEdit', 'officialAreaReference': 'TextEdit', 'value': 'Range', 'value_uom': 'TextEdit', });
lyr_Curvasdenivel_3.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'CLOSED_CON': 'TextEdit', });
lyr_FincaRajamancera4227has_1.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_uom': 'no label', 'beginLifespanVersion': 'no label', 'endLifespanVersion': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCadastralReference': 'no label', 'pos': 'no label', });
lyr_Naves_2.set('fieldLabels', {'gml_id': 'no label', 'beginLifespanVersion': 'no label', 'conditionOfConstruction': 'no label', 'beginning': 'no label', 'end': 'no label', 'endLifespanVersion': 'no label', 'informationSystem': 'no label', 'reference': 'no label', 'localId': 'no label', 'namespace': 'no label', 'horizontalGeometryEstimatedAccuracy': 'no label', 'horizontalGeometryEstimatedAccuracy_uom': 'no label', 'horizontalGeometryReference': 'no label', 'referenceGeometry': 'no label', 'currentUse': 'no label', 'numberOfBuildingUnits': 'no label', 'numberOfDwellings': 'no label', 'numberOfFloorsAboveGround': 'no label', 'documentLink': 'no label', 'format': 'no label', 'sourceStatus': 'no label', 'officialAreaReference': 'no label', 'value': 'no label', 'value_uom': 'no label', });
lyr_Curvasdenivel_3.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'ELEVATION': 'no label', 'CLOSED_CON': 'no label', });
lyr_Curvasdenivel_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});