package example.controller.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import example.dao.MemberInviteDao;
import example.dao.ReplyContentDao;
import example.vo.JsonResult;
import example.vo.MemberInvite;
import example.vo.ReplyContent;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/memberInvite/") // 이 페이지의 컨트롤러의 기준 URL
public class MemberInviteController {
	@Autowired MemberInviteDao memberInviteDao;
	@Autowired ReplyContentDao replyContentDao;
	
	
	@RequestMapping(path="list")
	public Object list(
			@RequestParam(defaultValue="1") int pageNo,
			@RequestParam(defaultValue="30") int length) throws Exception {

		try {
			HashMap<String,Object> map = new HashMap<>();
			map.put("startIndex", (pageNo - 1) * length);
			map.put("length", length);
			return JsonResult.success(memberInviteDao.selectList(map));
			
		} catch (Exception e) {
	
			return JsonResult.fail(e.getMessage());
		}					
	}
		
	@RequestMapping(path="add")
	public Object add(MemberInvite memberInvite, HttpSession session) throws Exception {
		// 성공하든 실패하든 클라이언트에게 데이터를 보내야 한다.
		try {
			memberInviteDao.insert(memberInvite);
			System.out.println(memberInvite);
			return JsonResult.success();
		} catch (Exception e) {
			
			return JsonResult.fail(e.getMessage());
		}						
	}
	
	@RequestMapping(path="delete")
	public Object delete(int no) throws Exception {		
		try {
			if (memberInviteDao.delete(no) == 0) {
				throw new Exception("삭제 실패입니다");
			}
			memberInviteDao.delete(no);
			return JsonResult.success();

		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}	
	}
	
	
	
	
}
