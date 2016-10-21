package example.controller.json;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;

import example.dao.CommunityCommentDao;
import example.vo.JsonResult;
import example.vo.Community;
import example.vo.CommunityComment;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/communityComment/") // 이 페이지의 컨트롤러의 기준 URL
public class CommunityCommentController {
	@Autowired
	CommunityCommentDao communityCommentDao;
	
	@RequestMapping(path="list")
	public Object list(
			@RequestParam(defaultValue="1") int pageNo,
			@RequestParam(defaultValue="30") int length) throws Exception {

		try {
			HashMap<String,Object> map = new HashMap<>();
			map.put("startIndex", (pageNo - 1) * length);
			map.put("length", length);
			return JsonResult.success(communityCommentDao.selectList(map));
			
		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}					
	}
		
	@RequestMapping(path="add")
	public Object add(CommunityComment CommunityComment) throws Exception {
		// 성공하든 실패하든 클라이언트에게 데이터를 보내야 한다.
		try {
			communityCommentDao.insert(CommunityComment);
			return JsonResult.success();
			
		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}						
	}
	
	@RequestMapping(path="detail")
	public Object detail(int no) throws Exception{
		
		try {
			CommunityComment CommunityComment = communityCommentDao.selectOne(no);
			
			if (CommunityComment == null)
				throw new Exception("해당 번호의 게시물이 존재하지 않습니다.");
			return JsonResult.success(CommunityComment);
			
		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}		
		
	}
	
	
	@RequestMapping(path="update")
	public Object update(CommunityComment CommunityComment) throws Exception{

		try {
			/*HashMap<String,Object> paramMap = new HashMap<>();
			paramMap.put("communitycommentNo", CommunityComment.getcommunityCommentNo());

			if (communityCommentDao.selectOneByPassword(paramMap) == null) {
				throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다.!");
			}*/
			communityCommentDao.update(CommunityComment);
			return JsonResult.success();
		} catch (Exception e) {
			
			return JsonResult.fail(e.getMessage());
		}					
		
	}
	
	@RequestMapping(path="delete")
	public Object delete(int no) throws Exception {
		try {
			
			HashMap<String,Object> paramMap = new HashMap<>();
      paramMap.put("commentNo", no);
      /*paramMap.put("password", password);*/

			if (communityCommentDao.selectOneByPassword(paramMap) == null) {
				throw new Exception("해당 게시물이 없거나 암호가 일치하지 않습니다.!");
			}
			communityCommentDao.delete(no);
			return JsonResult.success();
		} catch (Exception e) {
			
			return JsonResult.fail(e.getMessage());
		}					
	}
}
