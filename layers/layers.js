var wms_layers = [];

var format_KecamatanGenteng_0 = new ol.format.GeoJSON();
var features_KecamatanGenteng_0 = format_KecamatanGenteng_0.readFeatures(json_KecamatanGenteng_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_0.addFeatures(features_KecamatanGenteng_0);
var lyr_KecamatanGenteng_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_0, 
                style: style_KecamatanGenteng_0,
                popuplayertitle: "Kecamatan Genteng",
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_0.png" /> Kecamatan Genteng'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_d_Halte_Surabaya_3 = new ol.format.GeoJSON();
var features_d_Halte_Surabaya_3 = format_d_Halte_Surabaya_3.readFeatures(json_d_Halte_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_Halte_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_Halte_Surabaya_3.addFeatures(features_d_Halte_Surabaya_3);
var lyr_d_Halte_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_Halte_Surabaya_3, 
                style: style_d_Halte_Surabaya_3,
                popuplayertitle: "d_Halte_Surabaya",
                interactive: true,
                title: '<img src="styles/legend/d_Halte_Surabaya_3.png" /> d_Halte_Surabaya'
            });
var format_d_JaringanJalan_Fixed_4 = new ol.format.GeoJSON();
var features_d_JaringanJalan_Fixed_4 = format_d_JaringanJalan_Fixed_4.readFeatures(json_d_JaringanJalan_Fixed_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_d_JaringanJalan_Fixed_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_d_JaringanJalan_Fixed_4.addFeatures(features_d_JaringanJalan_Fixed_4);
var lyr_d_JaringanJalan_Fixed_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_d_JaringanJalan_Fixed_4, 
                style: style_d_JaringanJalan_Fixed_4,
                popuplayertitle: "d_JaringanJalan_Fixed",
                interactive: true,
                title: '<img src="styles/legend/d_JaringanJalan_Fixed_4.png" /> d_JaringanJalan_Fixed'
            });
var format_Servicearealines_5 = new ol.format.GeoJSON();
var features_Servicearealines_5 = format_Servicearealines_5.readFeatures(json_Servicearealines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearealines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearealines_5.addFeatures(features_Servicearealines_5);
var lyr_Servicearealines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicearealines_5, 
                style: style_Servicearealines_5,
                popuplayertitle: "Service area (lines)",
                interactive: true,
                title: '<img src="styles/legend/Servicearealines_5.png" /> Service area (lines)'
            });

lyr_KecamatanGenteng_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_d_Halte_Surabaya_3.setVisible(true);lyr_d_JaringanJalan_Fixed_4.setVisible(true);lyr_Servicearealines_5.setVisible(true);
var layersList = [lyr_KecamatanGenteng_0,lyr_OpenStreetMap_1,lyr_Clipped_2,lyr_d_Halte_Surabaya_3,lyr_d_JaringanJalan_Fixed_4,lyr_Servicearealines_5];
lyr_KecamatanGenteng_0.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas': 'Luas', 'Terjangkau': 'Terjangkau', 'Jangkauan': 'Jangkauan', });
lyr_Clipped_2.set('fieldAliases', {'id': 'id', 'cost_level': 'cost_level', });
lyr_d_Halte_Surabaya_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__RUTE': 'Informasi Halte__RUTE', 'Informasi Halte__Destinasi': 'Informasi Halte__Destinasi', });
lyr_d_JaringanJalan_Fixed_4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Servicearealines_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_KecamatanGenteng_0.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas': '', 'Terjangkau': '', 'Jangkauan': '', });
lyr_Clipped_2.set('fieldImages', {'id': 'Range', 'cost_level': 'TextEdit', });
lyr_d_Halte_Surabaya_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__RUTE': 'TextEdit', 'Informasi Halte__Destinasi': 'TextEdit', });
lyr_d_JaringanJalan_Fixed_4.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_Servicearealines_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_KecamatanGenteng_0.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'inline label - always visible', 'Luas': 'no label', 'Terjangkau': 'no label', 'Jangkauan': 'inline label - always visible', });
lyr_Clipped_2.set('fieldLabels', {'id': 'no label', 'cost_level': 'no label', });
lyr_d_Halte_Surabaya_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'Informasi Halte__RUTE': 'inline label - always visible', 'Informasi Halte__Destinasi': 'inline label - always visible', });
lyr_d_JaringanJalan_Fixed_4.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_Servicearealines_5.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearealines_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});