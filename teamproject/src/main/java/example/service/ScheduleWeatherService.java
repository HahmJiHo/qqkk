package example.service;

import example.vo.MidTermWeather;

public interface ScheduleWeatherService {
  StringBuffer importWeather(String place) throws Exception;
  //String xmlToJson(StringBuffer st) throws Exception; 2016.11.02 수정사항: xmlToJson 사용안함
  String getPlaceName(int value) throws Exception;
  MidTermWeather xmlParser(String xml, String date) throws Exception;
}
