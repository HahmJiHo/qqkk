package example.controller;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import example.service.CommunityService;
import example.vo.Community;

@Controller // 페이지 컨트롤러에 붙이는 애노테이션 
@RequestMapping("/community/") // 이 페이지의 컨트롤러의 기준 URL
public class CommunityController {
  @Autowired ServletContext sc;
  @Autowired CommunityService communityService;
	
	
	@RequestMapping(path="list")
	public String list(
			@RequestParam(defaultValue="1")int pageNo,
			@RequestParam(defaultValue="5")int length,
			Model model) throws Exception {
		List<Community> list = communityService.getCommunityList(pageNo, length);
		model.addAttribute("list", list);			
		
		return "community/CommunityList";	
	}
	
	@RequestMapping(path="add")
	public String add(
			Community community,
      MultipartFile file1,
      MultipartFile file2) throws Exception {
    String uploadDir = sc.getRealPath("/upload") + "/";
    try {
      communityService.insertCommunity(community, file1, file2, uploadDir);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return "redirect:list.do";
  }
	
	@RequestMapping("detail")
	public String detail(int no, Model model) throws Exception{
		Community community = communityService.getCommunity(no);
		model.addAttribute("community", community);
		return "community/CommunityDetail";
	}
	
	@RequestMapping("update")
	public String update(Community community) throws Exception{
		communityService.updateCommunity(community);
		return "redirect:list.do";
	}
	
	@RequestMapping("delete")
	public String delete(int no) throws Exception {
		communityService.deleteCommunity(no);    	
		return "redirect:list.do";
	}
}
