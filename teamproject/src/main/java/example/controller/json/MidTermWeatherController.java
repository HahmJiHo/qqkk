package example.controller.json;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import example.service.ScheduleWeatherService;
import example.vo.JsonResult;
import example.vo.MidTermWeather;

@Controller
@RequestMapping("/myschedule/")
public class MidTermWeatherController {
  MidTermWeather midTermWeather;
  @Autowired ScheduleWeatherService scheduleWeatherService;
  @RequestMapping(path="midTermWeather")
  public Object list(int gpno, String date) throws Exception {
    try {
      HashMap<String,Object> data = new HashMap<String,Object>();
      String placeName = scheduleWeatherService.getPlaceName(gpno);
      String xml = scheduleWeatherService.importWeather(placeName).toString();
      System.out.println(xml);
      date += " 00:00";
      MidTermWeather midTermWeather = scheduleWeatherService.xmlParser(xml, date);

      data.put("city", midTermWeather.getCity());
      data.put("mode", midTermWeather.getMode());
      data.put("time", midTermWeather.getDate());
      data.put("state", midTermWeather.getState());
      data.put("minTemp", midTermWeather.getMinTemp());
      data.put("maxTemp", midTermWeather.getMaxTemp());

      if (midTermWeather == null) 
        throw new Exception("해당 날짜에 날씨 정보가 존재하지 않습니다.");

      return JsonResult.success(data);
    } catch(Exception e){
      System.out.println("test!!!");
      return JsonResult.fail(e.getMessage());
    }
  }
}
