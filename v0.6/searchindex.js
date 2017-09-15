Search.setIndex({docnames:["api/catalog","api/http_util","api/index","api/metadata","api/ncss","api/ncssdataset","api/radarserver","developerguide","examples/Basic_Usage","examples/Radar_Server_Level_3","examples/index","examples/ncss/NCSS_Cartopy_Example","examples/ncss/NCSS_Example","examples/ncss/NCSS_Timeseries_Examples","index","installguide"],envversion:53,filenames:["api/catalog.rst","api/http_util.rst","api/index.rst","api/metadata.rst","api/ncss.rst","api/ncssdataset.rst","api/radarserver.rst","developerguide.rst","examples/Basic_Usage.rst","examples/Radar_Server_Level_3.rst","examples/index.rst","examples/ncss/NCSS_Cartopy_Example.rst","examples/ncss/NCSS_Example.rst","examples/ncss/NCSS_Timeseries_Examples.rst","index.rst","installguide.rst"],objects:{"siphon.catalog":{CatalogRef:[0,1,1,""],CompoundService:[0,1,1,""],Dataset:[0,1,1,""],DatasetCollection:[0,1,1,""],IndexableMapping:[0,1,1,""],SimpleService:[0,1,1,""],TDSCatalog:[0,1,1,""],get_latest_access_url:[0,4,1,""]},"siphon.catalog.CatalogRef":{__init__:[0,2,1,""],follow:[0,2,1,""],href:[0,3,1,""],name:[0,3,1,""],title:[0,3,1,""]},"siphon.catalog.CompoundService":{__init__:[0,2,1,""],name:[0,3,1,""],service_type:[0,3,1,""],services:[0,3,1,""]},"siphon.catalog.Dataset":{__init__:[0,2,1,""],access_urls:[0,3,1,""],access_with_service:[0,2,1,""],add_access_element_info:[0,2,1,""],download:[0,2,1,""],make_access_urls:[0,2,1,""],name:[0,3,1,""],remote_access:[0,2,1,""],remote_open:[0,2,1,""],resolve_url:[0,2,1,""],subset:[0,2,1,""],url_path:[0,3,1,""]},"siphon.catalog.DatasetCollection":{filter_time_nearest:[0,2,1,""],filter_time_range:[0,2,1,""]},"siphon.catalog.SimpleService":{__init__:[0,2,1,""],access_urls:[0,3,1,""],is_resolver:[0,2,1,""],name:[0,3,1,""],service_type:[0,3,1,""]},"siphon.catalog.TDSCatalog":{__init__:[0,2,1,""],base_tds_url:[0,3,1,""],catalog_refs:[0,3,1,""],catalog_url:[0,3,1,""],datasets:[0,3,1,""],latest:[0,3,1,""],services:[0,3,1,""]},"siphon.http_util":{BadQueryError:[1,5,1,""],DataQuery:[1,1,1,""],HTTPEndPoint:[1,1,1,""],UTC:[1,1,1,""],create_http_session:[1,4,1,""],parse_iso_date:[1,4,1,""],urlopen:[1,4,1,""]},"siphon.http_util.DataQuery":{add_query_parameter:[1,2,1,""],all_times:[1,2,1,""],items:[1,2,1,""],lonlat_box:[1,2,1,""],lonlat_point:[1,2,1,""],time:[1,2,1,""],time_range:[1,2,1,""],variables:[1,2,1,""]},"siphon.http_util.HTTPEndPoint":{get:[1,2,1,""],get_path:[1,2,1,""],get_query:[1,2,1,""],query:[1,2,1,""],url_path:[1,2,1,""],validate_query:[1,2,1,""]},"siphon.http_util.UTC":{dst:[1,2,1,""],tzname:[1,2,1,""],utcoffset:[1,2,1,""]},"siphon.metadata":{TDSCatalogMetadata:[3,1,1,""]},"siphon.metadata.TDSCatalogMetadata":{__init__:[3,2,1,""],metadata:[3,3,1,""]},"siphon.ncss":{NCSS:[4,1,1,""],NCSSQuery:[4,1,1,""],ResponseRegistry:[4,1,1,""],combine_dicts:[4,4,1,""],combine_xml_points:[4,4,1,""],default_unit_handler:[4,4,1,""],deletetempfile:[4,4,1,""],parse_csv_dataset:[4,4,1,""],parse_csv_header:[4,4,1,""],parse_csv_response:[4,4,1,""],parse_xml:[4,4,1,""],parse_xml_dataset:[4,4,1,""],parse_xml_point:[4,4,1,""],read_netcdf:[4,4,1,""],squish:[4,4,1,""]},"siphon.ncss.NCSS":{__init__:[4,2,1,""],get:[4,2,1,""],get_data:[4,2,1,""],get_data_raw:[4,2,1,""],get_path:[4,2,1,""],get_query:[4,2,1,""],metadata:[4,3,1,""],query:[4,2,1,""],unit_handler:[4,3,1,""],url_path:[4,2,1,""],validate_query:[4,2,1,""],variables:[4,3,1,""]},"siphon.ncss.NCSSQuery":{__init__:[4,2,1,""],accept:[4,2,1,""],add_lonlat:[4,2,1,""],add_query_parameter:[4,2,1,""],all_times:[4,2,1,""],items:[4,2,1,""],lonlat_box:[4,2,1,""],lonlat_point:[4,2,1,""],projection_box:[4,2,1,""],strides:[4,2,1,""],time:[4,2,1,""],time_range:[4,2,1,""],variables:[4,2,1,""],vertical_level:[4,2,1,""]},"siphon.ncss.ResponseRegistry":{"default":[4,6,1,""],__init__:[4,2,1,""],register:[4,2,1,""]},"siphon.ncss_dataset":{NCSSDataset:[5,1,1,""]},"siphon.ncss_dataset.NCSSDataset":{__init__:[5,2,1,""],accept_list:[5,3,1,""],axes:[5,3,1,""],coordinate_transforms:[5,3,1,""],gridsets:[5,3,1,""],lat_lon_box:[5,3,1,""],time_span:[5,3,1,""],variables:[5,3,1,""]},"siphon.radarserver":{RadarQuery:[6,1,1,""],RadarServer:[6,1,1,""],Station:[6,1,1,""],get_radarserver_datasets:[6,4,1,""],parse_station_table:[6,4,1,""],parse_xml_station:[6,4,1,""]},"siphon.radarserver.RadarQuery":{__init__:[6,2,1,""],add_query_parameter:[6,2,1,""],all_times:[6,2,1,""],items:[6,2,1,""],lonlat_box:[6,2,1,""],lonlat_point:[6,2,1,""],stations:[6,2,1,""],time:[6,2,1,""],time_range:[6,2,1,""],variables:[6,2,1,""]},"siphon.radarserver.RadarServer":{__init__:[6,2,1,""],get:[6,2,1,""],get_catalog:[6,2,1,""],get_catalog_raw:[6,2,1,""],get_path:[6,2,1,""],get_query:[6,2,1,""],metadata:[6,3,1,""],query:[6,2,1,""],stations:[6,3,1,""],url_path:[6,2,1,""],validate_query:[6,2,1,""],variables:[6,3,1,""]},"siphon.radarserver.Station":{__init__:[6,3,1,""],count:[6,2,1,""],elevation:[6,3,1,""],id:[6,3,1,""],index:[6,2,1,""],latitude:[6,3,1,""],longitude:[6,3,1,""],name:[6,3,1,""]},siphon:{catalog:[0,0,0,"-"],http_util:[1,0,0,"-"],metadata:[3,0,0,"-"],ncss:[4,0,0,"-"],ncss_dataset:[5,0,0,"-"],radarserver:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:staticmethod"},terms:{"105w":[12,13],"136e37b":7,"20171118_2356":0,"40n":[12,13],"50m":11,"break":14,"byte":[4,6],"case":[8,9,11,12,13],"class":[0,1,3,4,5,6,11,12,13],"default":[0,1,3,4],"final":[7,9],"float":[1,4,5,6],"function":[1,4,6,10,13,14],"import":[8,9,11,12,13],"int":4,"long":11,"new":[0,1,4,6,7,9,11,12,13],"return":[0,1,4,5,6,9,11,12,13],"static":4,"true":[4,12,13],"while":[7,14],For:[0,7,14],GFS:[11,12,13],N0S:9,N1S:9,N2S:9,N3S:9,One:[1,4,6],TDS:[0,3,4,6,10,11,12,13],The:[0,1,3,4,6,7,9,11,12,13,14,15],Then:[7,9],There:7,These:[0,1,15],Use:[1,4,6,9,11,12,13],Used:4,Using:[7,9],WMS:0,__future__:8,__init__:[0,3,4,5,6],__iter__:1,_version:7,about:[0,4,6,14],accept:[4,11,12,13],accept_list:5,access:[0,1,4,5,6,9,11,12,13,14],access_el:0,access_method:0,access_url:[0,9],access_with_servic:0,accessor:9,accur:6,actual:11,add:[1,4,6,7,11],add_access_element_info:0,add_featur:11,add_lonlat:4,add_query_paramet:[1,4,6],added:7,addit:[1,7],address:0,adher:7,admin_1_states_provinces_lin:11,administr:7,adopt:7,against:7,agent:1,alia:6,all:[0,1,4,6,7,10,11,12,13],all_servic:0,all_tim:[1,4,6],allow:0,almost:9,alpha:11,also:[1,7,11,12,13,15],alwai:0,analys:8,ani:[0,1,4,6,7,11],annual:14,anyth:[1,4,6],api:[1,7,14],applic:14,appropri:[0,1,3,4,6,7,9],approxim:13,arbitrari:[1,4,6],archiv:7,argument:[1,4,6],around:1,arrai:[4,9],arrang:7,ask:[9,11,12,13],assembl:[1,4,6],assign:[0,1,4,6],associ:0,assum:7,attribut:[5,11,12],author:7,autom:7,automat:7,avail:[0,4,6,7,9,14],ax2:12,axes:[5,11],axi:12,azimuth:9,badqueryerror:[1,6],bag:7,base:[0,1,4,6,7,15],base_tds_url:0,base_url:0,basereflectivitydr:9,basic:[10,11],basic_usag:8,bdist_wheel:7,been:[1,4,6],befor:7,begin:5,best:[11,12,13],best_d:[11,12,13],best_gf:[11,12,13],better:[7,8],big:7,black:11,bless:14,blind:7,bool:[1,4,6],bottom:4,bound:[1,4,5,6,11],boundari:11,box:[1,4,6,11],branch:7,broken:7,brown:7,bug:14,bugfix:7,buggi:7,build:[0,7,15],built:7,call:[1,4,6,7],callabl:4,can:[1,4,6,7,9,11,12,13,15],cannot:6,capabl:0,cartesian:9,cartopi:10,cat:8,catalog:[2,3,6,9,10,11,12,13],catalog_ref:[0,8],catalog_url:[0,9],catalogref:[0,6],categori:11,ccr:11,ccs039:9,cdmr:[7,9],cdmremot:[0,9],cfeatur:11,chain:[1,4,6,9],chanc:7,chang:14,charact:7,check:[1,4,6,7,9],chosen:9,clean:7,clear:1,client:[0,3],closest:0,cmap:11,code:[0,1,4,6,8,9,10,11,12,13,14,15],codecov:7,collect:[0,11,12,13,14],color:11,colorbar:11,combin:[4,11],combine_dict:4,combine_xml_point:4,come:[4,7,15],commit:7,commun:0,compar:0,compat:0,compliant:4,compos:[1,4,6],compound:0,compoundservic:0,confid:7,configur:7,consid:14,construct:[4,5,6,11,12,13],contain:[0,1,3,4,5,6,7,8,11,12,13],content:[1,4],continu:7,contour:11,contourf:11,convert:[9,11,13],coolwarm:11,coordin:[4,5,9,11,12],coordinate_transform:5,copi:7,correct:[7,12],correctli:7,correspond:[0,11,12,13],cos:9,could:7,count:6,coverag:[4,6,7],creat:[0,1,4,6,7,9,11,12,13],create_http_sess:1,crs:11,csv:4,cultur:11,current:[0,7,8,11,12,14,15],daa:9,dai:[0,13],data:[0,1,4,6,8,9,11,12,13,14],datalim:9,dataqueri:[1,4,6],dataset:[0,4,5,6,9,10,11,12,13],datasetcollect:0,date:[0,1,11],datetim:[0,1,4,5,6,9,11,12,13],daylight:1,default_unit_handl:4,defin:[0,5],deg2rad:9,deg:11,degre:[1,4,6,11,12,13],degree_east:5,degree_north:5,delet:[4,7],deletetempfil:4,denver:9,depend:4,describ:7,design:14,desir:[0,4],detail:1,determin:[1,4,6],devel:7,develop:14,deviat:7,dhr:9,dict:[0,3,5,6],dictionari:[0,1,3,4,5,9],dimens:[4,11,12],dir:7,direct:[4,9,14],directli:7,directori:[7,15],dirti:7,discuss:14,dist:7,distribut:7,doc8:7,doc:[5,7],docstr:7,document:[5,15],dod:9,dodsc:9,doe:1,doing:7,done:7,down:7,download:[0,4,6,8,9,10,11,12,13,14,15],dpa:9,dpr:9,dsd:9,dsp:9,dst:1,dta:9,du3:9,du6:9,dure:7,dvl:9,each:11,earli:14,easi:7,easiest:15,easili:7,east:[1,4,5,6,11],eastern:11,edg:4,edgecolor:11,edu:[8,9,11,12,13],eet:9,either:[0,7],elem:[4,6],element:[0,1,3,4,5,6,13],element_nod:0,elev:6,elimin:7,els:7,empti:[4,6],enabl:0,encod:[9,11,12,13],end:[0,1,4,5,6,7],endpoint:[1,4,6],enforc:7,ensur:[1,4,6,7],entir:[7,13],entri:3,env:7,environ:7,equal:9,equat:[1,4,6],equival:4,escap:1,etc:0,even:7,everi:7,everyth:7,exact:4,exampl:[0,7,8,11,14],examples_jupyt:10,examples_python:10,except:[1,4],exclud:7,exist:[0,1,4,6],expand:[4,6],expect:1,express:0,extend:0,extent:11,extract:0,facecolor:11,facilit:[11,12,13],fahrenheit:11,fail:1,fan:7,featur:[11,14],featuredataset:5,feedback:7,fetch:[4,6],few:[12,13],field:6,fig:[9,11,12,13],figsiz:[9,11,12,13],figur:11,file:[0,1,4,6,7,9,11,12,13],filenam:0,fileserv:9,filter:0,filter_time_nearest:0,filter_time_rang:0,find:[0,9],first:[6,9,11,12,13],fix:7,flag:7,flake8:7,flatten:[7,11],fmt:4,fname:4,fobj:1,focus:14,follow:[0,9,15],fontsiz:11,forecast:[8,11,12,13],forev:7,form:[1,4,6],format:[1,4,7,10,11,12,13],formul:1,fortun:13,found:[0,9,15],fraction:11,from:[0,1,3,4,5,6,7,8,9,11,12,13,14,15],ftg:9,full:[0,1,4,6],fulli:0,fun:14,g136e37b:7,galleri:[8,9,10,11,12,13],gate:9,gener:[5,7,8,9,11,12,13],geodet:11,get:[0,1,4,6,7,9,11,12,13],get_catalog:[6,9],get_catalog_raw:6,get_data:[4,11,12,13],get_data_raw:4,get_latest_access_url:0,get_path:[1,4,6],get_queri:[1,4,6],get_radarserver_dataset:[6,9],git:7,github:[7,14,15],give:[7,11],given:[0,1,4,6],global:[11,12,13],global_0p25deg:11,global_0p5deg:[12,13],good:[7,11],grab:[7,8,15],grib:[11,12,13],grid:[4,5,11,12,13],gridaspoint:5,gridset:5,group:0,guid:14,half:[12,13],handl:[4,6,9,11,12,13],handle_unit:4,has:[0,4,6,7,13],hash:7,have:[1,4,6,7,9],header:4,help:[0,3,6,9],helper:[6,13],hhc:9,hide:7,histori:7,hit:7,hold:[0,3,5],horizont:4,host:[7,14],hour:[0,11,13],href:0,html:15,http:[0,1,4,6,8,9,11,12,13,15],http_util:2,httpendpoint:[1,4],httperror:[1,4,6],httpserver:[0,9],humid:12,idd:9,idea:7,ident:9,identifi:[0,7],ignor:4,iii:9,implement:1,includ:[1,4,6,7,14],inclus:0,index:[0,2,6],indexablemap:0,indic:[0,7],inform:[0,3,4,5,6,12,13],inherit:3,initi:[0,3,4,5,6],instal:[7,14],instanc:[0,1,4,6,7,9,11,12,13],instead:4,instruct:15,integ:6,integr:7,interest:[7,11,12,13],interfac:[1,9],ipynb:[8,9,11,12,13],ipython:7,is_resolv:0,isnan:9,iso:[1,5],issu:14,item:[0,1,4,6],iter:[1,4,6],itself:9,join:14,jupyt:[8,9,10,11,12,13],just:[4,7,11,14],keep:7,kei:[0,12,13],kelvin:11,keyword:[0,1,4,6],kwarg:[1,4,6],last:12,lat:[1,4,6,11],lat_2d:11,lat_lon_box:5,lat_val:11,lat_var:11,latest:[0,7],latitud:[1,4,5,6,11,12,13],left:4,length:7,level3:9,level3_ftg_n0q_20170915_1925:9,level:[0,4,5,6,9,12,13],lifeblood:7,like:[0,1,4,7],limit:7,line:[1,4,6,7],linestyl:11,linewidth:[11,12,13],list:[0,4,5,6,8,9,11,12,13,14],local:[0,7],locat:[5,11],logic:7,lon:[1,4,6,11],lon_2d:11,lon_val:11,lon_var:11,longer:7,longitud:[1,4,5,6,11,12,13],lonlat_box:[1,4,6,11],lonlat_point:[1,4,6,12,13],look:[0,7,9,12,13],loop:0,lowest:9,made:[7,13],mai:[5,14],mail:14,major:7,make:[0,1,4,6,9,11],make_access_url:0,manag:7,mani:14,manifest:7,manner:4,map:[6,11],marker:11,markers:11,mask:9,master:7,match:[0,6,12],materi:14,matplotlib:[9,11,12,13],max:12,max_i:4,max_x:4,mean:7,merg:7,meridian:[1,4,6],meshgrid:11,metadata:[0,1,2,4,6,12,13],metadata_in:3,meteorolog:14,method:[0,5,9],metpi:14,microsecond:0,mimetyp:4,min:12,min_i:4,min_x:4,minimum:7,minor:7,minut:[0,8,9,11,12,13],miss:[0,5,7],mit:14,model:[8,13],modifi:[1,4,6],modul:[2,11,12,13],moment:7,monitor:7,month:0,more:[1,4,6,12,13],most:7,mostli:7,multipl:[1,4,6],n0c:9,n0h:9,n0k:9,n0m:9,n0q:9,n0r:9,n0u:9,n0v:9,n0x:9,n0z:9,n1c:9,n1h:9,n1k:9,n1m:9,n1p:9,n1q:9,n1u:9,n1x:9,n2c:9,n2h:9,n2k:9,n2m:9,n2q:9,n2u:9,n2x:9,n3c:9,n3h:9,n3k:9,n3m:9,n3q:9,n3u:9,n3x:9,nac:9,nah:9,nak:9,nam:9,name:[0,1,4,6,7,11,12,13],namedtupl:6,naq:9,nativ:4,naturalearthfeatur:11,nau:9,nax:9,nbc:9,nbh:9,nbk:9,nbm:9,nbq:9,nbu:9,nbx:9,ncep:[11,12,13],ncr:9,ncss:[2,5],ncss_cartopy_exampl:11,ncss_dataset:2,ncss_exampl:12,ncss_timeseries_exampl:13,ncssdataset:[4,5],ncssqueri:4,nearest:11,necessari:7,need:[5,7,9,11],net:9,netcdf4:[0,11,12,13,14],netcdf:[4,5,9,10,11,12,13,14],netcdfsubset:0,newli:4,nexrad:9,next:13,nice:7,nid:9,nmd:9,node:[0,3,5],non:7,none:[0,1,3,4,6,9,11],north:[1,4,5,6,11],northern:11,note:[5,7,11,12,13],notebook:[8,9,10,11,12,13],noth:[1,7],now:[9,11,12,13],nst:9,ntp:9,num2dat:[11,13],number:[6,7,11,13],numpi:[4,7,9,11,15],nvl:9,nvw:9,object:[0,1,3,5,9,11,12,13],observ:8,obtain:0,occurr:6,offici:14,offset:1,oha:9,onc:7,one:[0,1,4,6,7,9],onli:[0,4,5,7],open:[0,14],opendap:[0,9],option:[0,1,3,4,6,7],ordereddict:0,org:15,other:[1,4,6,12,13],our:[1,9,11,12,13],out:[7,8,9,11,12,13],outlin:7,output:13,outset:7,over:0,overrid:1,own:0,packag:[7,15],page:7,pair:[1,4,6],pandoc:7,paper:7,param:[1,4,6],paramet:[0,1,3,4,5,6,9],parent:3,pars:[0,1,3,4,5,6,9,11,12,13],parse_csv_dataset:4,parse_csv_head:4,parse_csv_respons:4,parse_iso_d:1,parse_station_t:6,parse_xml:4,parse_xml_dataset:4,parse_xml_point:4,parse_xml_st:6,part:[5,7],particular:[0,4],pass:[1,4,6,7,9],past:7,path:[0,1,4,6,7],pattern:0,pcolormesh:9,pep8:7,perform:7,pip:[7,15],place:[1,4,6],placehold:8,platecarre:11,plot:[9,11,12,13],plt:[9,11,12,13],point:[1,4,5,6,9,11,12,13],pointfeaturecollect:5,polar:9,possibl:1,present:6,press:12,press_nam:12,press_val:12,pressur:12,presum:1,prime:[1,4,6],print:[8,9,11,12,13],print_funct:8,process:7,product:[8,9],project:[4,7,11],projection_box:4,proper:[0,4,6,7],properli:[1,11,12,13],protobuf:15,provid:[0,1,4,6,9,11],pta:9,pull:[7,9,11,12,13],push:7,pyplot:[9,11,12,13],pytest:7,python:[0,7,8,9,10,11,12,13,14,15],qualifi:0,quarter:11,queri:[0,1,4,6,10,11,12,13],question:14,radar:[6,8,10],radar_server_level_3:9,radarqueri:6,radarserv:[2,9],rais:[0,1,4,6],random:0,rang:[0,1,4,6,9,13],raw:[4,6],read:[0,3,5,8],read_netcdf:4,reader:9,readi:13,readm:7,reason:13,rebas:7,recent:7,recommend:15,recreat:7,reduc:11,ref:[0,9],refer:[0,6,8,9,11],referenc:0,reflect:9,reftime1:11,regex:0,regist:4,registri:4,regular:0,rel:[1,4,6,12,13],relative_humidity_isobar:12,relh:12,reli:7,remot:[0,8,10],remote_access:0,remote_open:0,remov:11,renam:11,repeat:[1,4,6],replac:[1,4,6],repo:7,report:14,repositori:7,repres:[0,1,3,4,5,6,9],represent:[4,11,12,13],request:[0,1,4,6,7,9,11,12,13,14,15],requir:[1,4,6,9],resolut:11,resolv:0,resolve_url:0,resp:[1,4,6],respons:[1,4,6],responseregistri:4,result:[1,4,6],retriev:4,right:[4,7],rng:9,root:[6,7],rtd:7,run:[7,8,9,11,12,13,15],satellit:8,save:[0,1],scale:11,scipi:15,scipylib:15,script:[8,9,11,12,13],sdist:7,second:[0,7,8,9,11,12,13],see:[6,7,9,11,12,13],seen:15,self:[1,4,6],send:[4,6],sens:7,sensibl:7,sequenc:[1,4,6],seri:[10,11,12],server:[0,1,4,6,8,9,11,12,13,14],servic:[0,4,5,6,7,10,11,12,13],service_nod:0,service_typ:0,session:1,set:[1,4,5,6,7,11,15],set_aspect:9,set_ext:11,set_titl:11,set_xlabel:[12,13],set_xlim:9,set_ylabel:[12,13],set_ylim:[9,12],setup:[7,15],share:12,should:[0,4,7,14],show:[5,9,11],signatur:6,similar:0,simpl:1,simpleservic:0,simpli:7,simplifi:[4,6],sin:[7,9],sinc:[7,11],singl:[0,4,11,12,13],siphon:[7,8,9,11,12,13,15],size:11,skip:4,small:7,smaller:7,some:[1,7,14],sourc:[7,8,9,10,11,12,13,14,15],south:[1,4,5,6,11],southern:11,space:[4,6],spatial:[1,4,6],specif:[1,4,6],specifi:[0,1,4,6],speed:7,sphinx:[7,8,9,10,11,12,13],split:[11,12],squash:7,squeez:[11,12,13],squish:4,stabl:[7,14],stage:14,stai:7,standard:7,standard_nam:[12,13],start:[0,1,4,6,13],state:11,states_provinc:11,station:[6,9],still:14,stn:6,stop:6,str:[0,1,3,4,5,6],stride:4,string:[0,1,4,5,6,7,9,11,12,13],studi:[8,9],subclass:1,subplot:[9,12,13],subset:[0,4,5,10,11,12,13],suffici:1,suitabl:11,support:[0,1,3,4,5,6,7,13,14,15],sure:9,surfac:[11,13],tag:[3,4,6,7],take:[4,7],talk:0,target:7,tdscatalog:[0,6,8,9,11,12,13],tdscatalogmetadata:[3,6],tdwr:9,technolog:14,temp:[11,12,13],temp_val:11,temp_var:11,temperatur:[11,12,13],temperature_isobar:[12,13],temperature_surfac:11,tempor:[1,4,5,6],temporari:4,tempt:7,term:14,than:[1,4,6],thei:[0,7],them:[1,7,9],theme:7,therefor:7,thi:[0,1,4,6,7,8,9,11,12,13,15],thin:1,thing:[7,14],those:[0,7],thredd:[0,1,4,6,9,10,11,12,13,14],through:[7,14,15],tilt:9,time1:11,time:[0,1,4,5,6,7,8,9,10,11,12],time_nam:11,time_rang:[1,4,6,13],time_span:5,time_v:[11,13],time_var:11,timedelta:13,timeseri:13,timezon:1,titl:[0,11],togeth:[1,4,6,7],toolkit:14,top:[0,1,4,5,6,7,9],total:[8,9,11,12,13],track:7,tracker:14,train:14,transform:[5,11],travi:7,tupl:[1,4,6],turn:1,tutori:14,twine:7,twini:12,type:[0,1,4,5,6],typic:0,tzname:1,u00b0f:11,ucar:[8,9,11,12,13],under:14,unidata:[8,14],uniform:7,unit:[4,7,11,12,13],unit_handl:4,updat:7,upload:7,upon:7,ups:7,url:[0,1,4,5,6,9],url_path:[0,1,4,6],urlopen:1,use:[0,7,9,11,12,13],used:[0,4,7],useful:11,user:[1,14],uses:[0,1,7,11],using:[0,1,4,7,9,10,11,12,13,14],usual:9,utc:[1,13],utcnow:[9,11,12,13],utcoffset:1,util:[1,14],valid:[1,4,5,6,9],validate_queri:[1,4,6,9],valu:[0,1,4,6,9,11,12,13],valueerror:[0,6],var_nam:[1,4,6],variabl:[1,4,5,6,9,11,12,13],variou:[1,4,6],version:[11,12,13,15],vertic:[4,12,13],vertical_level:[4,13],via:[4,6,7],virtual:[11,12,13],vmajor:7,wai:[1,15],want:12,warn:4,well:[1,4,6,7,9,11,12,13,14,15],west:[1,4,5,6,11],western:11,what:[7,9],wheel:7,when:[0,1,4,6,7,9],where:11,whether:[0,1,4,6],which:[0,1,4,5,6,7,9,11,12,13],whose:0,within:[0,5,7,8,15],won:14,work:[7,14],workshop:14,world:7,wors:7,wrap:[1,4,6],wrapper:1,written:7,www:15,xml:[0,4,5,6,8,11,12,13],year:0,yield:1,yml:7,you:7,your:15,zip:[7,10],zorder:11},titles:["<code class=\"docutils literal\"><span class=\"pre\">siphon.catalog</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.http_util</span></code>","The Siphon API","<code class=\"docutils literal\"><span class=\"pre\">siphon.metadata</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.ncss</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.ncss_dataset</span></code>","<code class=\"docutils literal\"><span class=\"pre\">siphon.radarserver</span></code>","Developer\u2019s Guide","THREDDS Catalog","TDS Radar Query Service","Siphon Examples","NCSS and CartoPy","Basic NCSS","NCSS Time Series","Siphon","Installation Guide"],titleterms:{TDS:9,The:2,api:2,basic:12,cartopi:11,catalog:[0,8],chang:7,code:7,conda:7,contact:14,develop:7,document:[7,14],exampl:[10,15],gener:10,guid:[7,15],http_util:1,instal:15,licens:14,make:7,metadata:3,ncss:[4,10,11,12,13],ncss_dataset:5,other:[7,14],project:14,queri:9,radar:9,radarserv:6,relat:14,releas:7,requir:[7,15],resourc:14,seri:13,servic:9,siphon:[0,1,2,3,4,5,6,10,14],style:7,test:7,thredd:8,time:13,tool:7,version:7}})