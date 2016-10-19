package example.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import example.dao.MyScheduleDao;
import example.vo.MySchedule;

@Controller
@RequestMapping("/myschedule/")
public class MyScheduleController {
  
  @Autowired
  MyScheduleDao myscheduleDao;
  
  @RequestMapping("list")
  public String list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length,
      Model model) throws Exception {
    
    HashMap<String,Object> map = new HashMap<>();
    map.put("startIndex", (pageNo - 1) * length);
    map.put("length", length);
    
    List<MySchedule> list = myscheduleDao.selectList(map);
    model.addAttribute("list", list);     
    
    return "/myschedule/GroupList.jsp";
  }
  
  @RequestMapping("add")
  public String add(MySchedule myschedule) throws Exception {
    myscheduleDao.insert(myschedule);    
    return "redirect:list.do";
  }
  
  @RequestMapping("detailm")
  public String detail(int no, Model model) throws Exception {
    MySchedule myschedule = myscheduleDao.selectOneByMemberNo(no);
    model.addAttribute("myschedule", myschedule);

    return "/myschedule/GroupDetail.jsp";
  }
  
  @RequestMapping("update")
  public String update(MySchedule myschedule) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("no", myschedule.getNo());

    if (myscheduleDao.selectOneByPassword(paramMap) == null) {
      throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다!");
    } 

    myscheduleDao.update(myschedule);
    return "redirect:list.do";
  }
  
  @RequestMapping("delete")
  public String delete(int no) throws Exception {
    myscheduleDao.delete(no);
    return "redirect:list.do";
  }
}
