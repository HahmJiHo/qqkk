package example.controller.json;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import example.dao.CommunityDao;
import example.vo.Community;
import example.vo.JsonResult;

@Controller 
@RequestMapping("/community/")
public class CommunityController {
  
  @Autowired CommunityDao communityDao;
  
  @RequestMapping(path="list")
  public Object list(
      @RequestParam(defaultValue="1") int pageNo,
      @RequestParam(defaultValue="5") int length) throws Exception {
    
    try {
      HashMap<String,Object> map = new HashMap<>();
      map.put("startIndex", (pageNo - 1) * length);
      map.put("length", length);
      
      return JsonResult.success(communityDao.selectList(map));
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="add")
  public Object add(Community community) throws Exception {
    try {
      communityDao.insert(community);
      return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="detail")
  public Object detail(int no) throws Exception {
    try {
      Community community = communityDao.selectOne(no);
      
      if (community == null) 
        throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
      
      return JsonResult.success(community);
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="update")
  public Object update(Community community) throws Exception {
    try {
      HashMap<String,Object> paramMap = new HashMap<>();
      paramMap.put("no", community.getNo());

      communityDao.update(community);
      return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  @RequestMapping(path="delete")
  public Object delete(int no, String password) throws Exception {
    try {
      HashMap<String,Object> paramMap = new HashMap<>();
      paramMap.put("no", no);

      communityDao.delete(no);
      return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
}







