package example.controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import example.dao.MyScheduleDao;
import example.vo.JsonResult;
import example.vo.MySchedule;

@Controller
@RequestMapping("/myschedule/")
public class MyScheduleController {
  
  @Autowired
  MyScheduleDao myscheduleDao;
  
  @RequestMapping(path="list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception {
    
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
   
      return JsonResult.success(myscheduleDao.selectList(map));

    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="detailm")
  public Object detailM(int no) throws Exception {
    try {
      MySchedule myschedule = myscheduleDao.selectOneByMemberNo(no);

      if (myschedule == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");

      return JsonResult.success(myscheduleDao);

    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  

  @RequestMapping(path="detailsc")
  public Object detail(int groupscNo) throws Exception {
    try {
      MySchedule myschedule = myscheduleDao.selectOneByScheduleNo(groupscNo);

      if (myschedule == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");

      return JsonResult.success(myscheduleDao);

    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
}
