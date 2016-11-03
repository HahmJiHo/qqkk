package example.service.impl;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilderFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import example.dao.PlaceDao;
import example.service.ScheduleWeatherService;
import example.vo.MidTermWeather;

@Service
public class DefaultScheduleWeatherService implements ScheduleWeatherService {
  @Autowired PlaceDao placeDao;

  /* importWeather() Method
   * 기상청으로 부터 중기예보 XML로 받아서 StringBuffer로 반환 
   */
  public StringBuffer importWeather(String place) throws Exception {
    String str = null;

    HashMap<String, Integer> province = new HashMap<String, Integer>();
    province.put("서울", 109); province.put("인천", 109); province.put("경기", 109);
    province.put("강원", 105); province.put("충청북도", 131); province.put("충청남도", 133);
    province.put("대전", 133); province.put("세종", 133); province.put("전북", 146);
    province.put("광주", 156); province.put("전라남도", 156); province.put("대구", 143);
    province.put("경상북도", 143); province.put("부산", 159); province.put("부산", 159);
    province.put("울산", 159); province.put("경상남도", 159); province.put("제주", 184);
    province.put("전라북도", 146); 

    HttpURLConnection conn = (HttpURLConnection)new URL(
        "http://www.kma.go.kr/weather/forecast/mid-term-rss3.jsp?stnId="
            + province.get(place)).openConnection();
    conn.connect();

    BufferedInputStream bis = new BufferedInputStream(conn.getInputStream());
    BufferedReader reader = new BufferedReader(new InputStreamReader(bis));
    StringBuffer st = new StringBuffer();
    String line;

    while((line = reader.readLine()) != null) {
      st.append(line);
    }
    return st;
  }

  /* 2016.11.01 수정사항: xmlToJSon 메서드 사용안함
  /* xmlToJson(StringBuffer st) Method
   * XML데이터를 JSON으로 변환하고 String으로 반환 
   
  public String xmlToJson (StringBuffer st) throws Exception {
    JSONObject xmlJSONObj = XML.toJSONObject(st.toString());
    String resultJSON = xmlJSONObj.toString(4);
    System.out.println(resultJSON);
    
    return resultJSON;
  }
  */

  /*
   * getPlaceName(int value) Method
   * placeDao에서 그룹번호를 통해 장소이름을 가져와서 날씨정보에 맞게 잘라낸다.
   * ex) 서울특별시 강남구 -> 서울 
   */
  public String getPlaceName(int value) throws Exception {
    String place = placeDao.selectPlace(value);
    String tempStr = place.substring(0,4);
    String resultStr = null;
    if (tempStr.equals("충청남도") || tempStr.equals("충청북도") || tempStr.equals("경상북도") || tempStr.equals("경상남도") || tempStr.equals("전라남도") || tempStr.equals("전라북도")) {
      resultStr = tempStr;
    } else {
      resultStr = place.substring(0,2);
    }

    return resultStr;
  }

  ///rss/channel/item/description/body  

  /*
   * xmlParser(String xml, String date) 날짜에 맞는 날씨 정보 출력 
   */
  public MidTermWeather xmlParser(String xml, String date) throws Exception {
    MidTermWeather midtermWeather = new MidTermWeather();
    InputSource is = new InputSource(new StringReader(xml));
    Document document = DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(is);

    Element element = document.getDocumentElement();
    Node channelNode = element.getElementsByTagName("channel").item(0);

    NodeList clist = channelNode.getChildNodes();
    NodeList ilist = clist.item(7).getChildNodes();
    NodeList blist = ilist.item(5).getChildNodes();
    NodeList list = blist.item(3).getChildNodes();

    if (list.item(1).getNodeName().equals("location")) {
      NodeList list2 = list.item(1).getChildNodes();
      for(int i = 0; i < list2.getLength(); i++) {
        if(list2.item(i).getNodeName().equals("data")) {
          NodeList list3 = list2.item(i).getChildNodes();
          //String content = list2.item(i).getTextContent();
          //System.out.println(i);
          //System.out.println("value" + content);
          String city = list2.item(3).getTextContent();
          midtermWeather.setCity(city);
          for(int j = 0; j <list3.getLength(); j++) {
            if(list3.item(j).getNodeName().equals("tmEf")) {
              if(list3.item(j).getTextContent().equals(date)) {
                String mode = list2.item(i).getChildNodes().item(1).getTextContent();
                String time = list2.item(i).getChildNodes().item(3).getTextContent();
                String state = list2.item(i).getChildNodes().item(5).getTextContent();
                String minTemp = list2.item(i).getChildNodes().item(7).getTextContent();
                String maxTemp = list2.item(i).getChildNodes().item(9).getTextContent();

                midtermWeather.setDate(time);
                midtermWeather.setMode(mode);
                midtermWeather.setMaxTemp(maxTemp);
                midtermWeather.setMinTemp(minTemp);
                midtermWeather.setState(state);

                System.out.println("mode:"+mode);
                System.out.println("time:"+time);
                System.out.println("state:"+state);
                System.out.println("minTemp:"+minTemp);
                System.out.println("maxTemp:"+maxTemp);
              }
            }
          }
        }
      }
    } else {
      midtermWeather = null;
    }
    return midtermWeather;

  }
}
