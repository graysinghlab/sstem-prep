import React, { useState } from 'react';
import { CheckCircle2, Clock, AlertCircle, User, FileText, DollarSign, Book, Handshake, Users, Mail, Cpu, Target, TrendingUp, Shield, Share2, Calendar } from 'lucide-react';

const NSFTracker = () => {
	const [components, setComponents] = useState([
		{
			id: 'proposal',
			title: 'Revised Proposal',
			description: 'Updated narrative with all required sections',
			category: 'Core Documents',
			icon: FileText,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started', // not-started, in-progress, review, completed
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'budget',
			title: 'Revised Budget',
			description: 'Updated budget spreadsheet and calculations',
			category: 'Financial',
			icon: DollarSign,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'budget-justification',
			title: 'Revised Budget Justification',
			description: 'Detailed justification for all budget items',
			category: 'Financial',
			icon: DollarSign,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'literature-review',
			title: 'Literature Review',
			description: 'Early research exposure & cohorting activities for retention/graduation',
			category: 'Research',
			icon: Book,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'industry-mous',
			title: 'Industry Partner MOUs',
			description: 'Memorandums of Understanding from industry partners',
			category: 'Partnerships',
			icon: Handshake,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'advisory-board',
			title: 'External Advisory Board',
			description: 'Advisory board members identified and committed',
			category: 'Governance',
			icon: Users,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'support-letters',
			title: 'Letters of Support',
			description: 'Letters from Financial Aid Director, President, Dean',
			category: 'Administrative',
			icon: Mail,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'ai-component',
			title: 'AI Training Component',
			description: 'NEW AI component for training and curricular improvements',
			category: 'Innovation',
			icon: Cpu,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		// Additional recommended components
		{
			id: 'evaluation-plan',
			title: 'Evaluation Plan',
			description: 'Assessment methodology and success metrics',
			category: 'Assessment',
			icon: Target,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'sustainability-plan',
			title: 'Sustainability Plan',
			description: 'Post-grant continuation strategy',
			category: 'Strategic',
			icon: TrendingUp,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-18',
			notes: '',
			completed: false
		},
		{
			id: 'diversity-plan',
			title: 'Diversity & Inclusion Plan',
			description: 'Student recruitment and support strategies',
			category: 'Strategic',
			icon: Users,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-12',
			notes: '',
			completed: false
		},
		{
			id: 'timeline',
			title: 'Project Timeline',
			description: 'Detailed implementation schedule',
			category: 'Planning',
			icon: Calendar,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-10',
			notes: '',
			completed: false
		},
		{
			id: 'student-metrics',
			title: 'Student Success Metrics',
			description: 'Clear retention, graduation, and employment outcomes',
			category: 'Assessment',
			icon: Target,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-14',
			notes: '',
			completed: false
		},
		{
			id: 'mentoring-framework',
			title: 'Mentoring Framework',
			description: 'Faculty and peer mentoring structures',
			category: 'Strategic',
			icon: Users,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-16',
			notes: '',
			completed: false
		},
		{
			id: 'professional-development',
			title: 'Professional Development Plan',
			description: 'Industry connections, internships, career services',
			category: 'Strategic',
			icon: TrendingUp,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-17',
			notes: '',
			completed: false
		},
		{
			id: 'assessment-instruments',
			title: 'Assessment Instruments',
			description: 'Pre/post surveys, focus groups, academic tracking tools',
			category: 'Assessment',
			icon: Target,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-13',
			notes: '',
			completed: false
		},
		{
			id: 'dissemination-plan',
			title: 'Dissemination Plan',
			description: 'How to share findings with broader community',
			category: 'Research',
			icon: Share2,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2024-09-19',
			notes: '',
			completed: false
		},
		{
			id: 'risk-management',
			title: 'Risk Management',
			description: 'Contingency plans for potential challenges',
			category: 'Planning',
			icon: Shield,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		// Additional components with updated dates
		{
			id: 'letter-of-intent',
			title: 'Letter of Intent',
			description: 'Initial submission to NSF expressing intent to apply',
			category: 'Core Documents',
			icon: Mail,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-09-02',
			notes: '',
			completed: false
		},
		{
			id: 'nsf-biosketch',
			title: 'Revised NSF Biosketch',
			description: 'Updated NSF biographical sketch format',
			category: 'Core Documents',
			icon: User,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'sotl-abstract',
			title: 'Abstract for SoTL',
			description: 'Scholarship of Teaching and Learning conference abstract',
			category: 'Research',
			icon: FileText,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		},
		{
			id: 'sotl-publication',
			title: 'Publication Draft for SoTL',
			description: 'Publication draft based on SMARTCOMP research',
			category: 'Research',
			icon: Book,
			approvals: { me: false, pi: false, vp: false },
			status: 'not-started',
			progress: 0,
			dueDate: '2025-10-15',
			notes: '',
			completed: false
		}
	]);

	const [selectedCategory, setSelectedCategory] = useState('all');
	const [view, setView] = useState('grid'); // grid or timeline

	const toggleApproval = (componentId, approver) => {
		setComponents(prev => prev.map(comp => {
			if (comp.id === componentId) {
				const newApprovals = { ...comp.approvals };
				newApprovals[approver] = !newApprovals[approver];
				
				const allApproved = Object.values(newApprovals).every(approved => approved);
				
				return {
					...comp,
					approvals: newApprovals,
					completed: allApproved
				};
			}
			return comp;
		}));
	};

	const updateProgress = (componentId, newProgress) => {
		setComponents(prev => prev.map(comp => {
			if (comp.id === componentId) {
				let newStatus = 'not-started';
				if (newProgress > 0 && newProgress < 50) newStatus = 'in-progress';
				else if (newProgress >= 50 && newProgress < 100) newStatus = 'review';
				else if (newProgress === 100) newStatus = 'completed';
				
				return {
					...comp,
					progress: newProgress,
					status: newStatus
				};
			}
			return comp;
		}));
	};

	const updateNotes = (componentId, notes) => {
		setComponents(prev => prev.map(comp => 
			comp.id === componentId ? { ...comp, notes } : comp
		));
	};

	const getOverallProgress = () => {
		const totalProgress = components.reduce((sum, comp) => sum + comp.progress, 0);
		return Math.round(totalProgress / components.length);
	};

	const getCategoryProgress = (category) => {
		const categoryItems = components.filter(comp => comp.category === category);
		if (categoryItems.length === 0) return 0;
		const totalProgress = categoryItems.reduce((sum, comp) => sum + comp.progress, 0);
		return Math.round(totalProgress / categoryItems.length);
	};

	const getFilteredComponents = () => {
		if (selectedCategory === 'all') return components;
		return components.filter(comp => comp.category === selectedCategory);
	};

	const getStatusColor = (status) => {
		switch (status) {
			case 'not-started': return 'text-gray-500 bg-gray-100';
			case 'in-progress': return 'text-blue-600 bg-blue-100';
			case 'review': return 'text-yellow-600 bg-yellow-100';
			case 'completed': return 'text-green-600 bg-green-100';
			default: return 'text-gray-500 bg-gray-100';
		}
	};

	const getDaysUntilDue = (dueDate) => {
		const today = new Date();
		const due = new Date(dueDate);
		const diffTime = due - today;
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		return diffDays;
	};

	const categories = ['all', ...new Set(components.map(comp => comp.category))];

	const CircularProgress = ({ progress, size = 120, strokeWidth = 8, label = "" }) => {
		const radius = (size - strokeWidth) / 2;
		const circumference = radius * 2 * Math.PI;
		const offset = circumference - (progress / 100) * circumference;
		
		const getColor = (progress) => {
			if (progress < 30) return '#ef4444';
			if (progress < 70) return '#f59e0b';
			return '#22c55e';
		};

		return (
			<div className="flex flex-col items-center">
				<div className="relative">
					<svg width={size} height={size} className="transform -rotate-90">
						<circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							stroke="#e5e7eb"
							strokeWidth={strokeWidth}
							fill="none"
						/>
						<circle
							cx={size / 2}
							cy={size / 2}
							r={radius}
							stroke={getColor(progress)}
							strokeWidth={strokeWidth}
							fill="none"
							strokeDasharray={circumference}
							strokeDashoffset={offset}
							strokeLinecap="round"
							className="transition-all duration-500 ease-in-out"
						/>
					</svg>
					<div className="absolute inset-0 flex items-center justify-center">
						<span className="text-2xl font-bold text-gray-700">{progress}%</span>
					</div>
				</div>
				{label && <p className="mt-2 text-sm font-medium text-gray-600 text-center">{label}</p>}
			</div>
		);
	};

	return (
		<div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
			<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
				<div className="flex justify-between items-start mb-6">
					<div>
						<h1 className="text-3xl font-bold text-gray-800 mb-2">NSF S-STEM Proposal Progress Tracker</h1>
						<p className="text-gray-600">Track detailed progress and approvals for successful grant submission</p>
					</div>
					<div className="flex space-x-2">
						<button
							onClick={() => setView(view === 'grid' ? 'timeline' : 'grid')}
							className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							{view === 'grid' ? 'Timeline View' : 'Grid View'}
						</button>
					</div>
				</div>
				
				{/* Overall Progress Dashboard */}
				<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						<div className="flex justify-center">
							<CircularProgress progress={getOverallProgress()} size={150} label="Overall Completion" />
						</div>
						<div className="col-span-2">
							<h3 className="text-lg font-semibold mb-4">Progress Summary</h3>
							<div className="grid grid-cols-2 gap-4">
								<div className="text-center">
									<div className="text-2xl font-bold text-green-600">{components.filter(c => c.progress === 100).length}</div>
									<div className="text-sm text-gray-600">Completed</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-yellow-600">{components.filter(c => c.progress > 0 && c.progress < 100).length}</div>
									<div className="text-sm text-gray-600">In Progress</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-red-600">{components.filter(c => c.progress === 0).length}</div>
									<div className="text-sm text-gray-600">Not Started</div>
								</div>
								<div className="text-center">
									<div className="text-2xl font-bold text-blue-600">{components.filter(c => getDaysUntilDue(c.dueDate) < 7 && c.progress < 100).length}</div>
									<div className="text-sm text-gray-600">Due Soon</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Category Filter */}
				<div className="mb-6">
					<div className="flex flex-wrap gap-2">
						{categories.map(category => (
							<button
								key={category}
								onClick={() => setSelectedCategory(category)}
								className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
									selectedCategory === category
										? 'bg-blue-600 text-white'
										: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
								}`}
							>
								{category === 'all' ? 'All Categories' : category}
								{category !== 'all' && ` (${getCategoryProgress(category)}%)`}
							</button>
						))}
					</div>
				</div>

				{/* Component Tracking */}
				<div className="space-y-4">
					{getFilteredComponents().map(component => {
						const Icon = component.icon;
						const approvalCount = Object.values(component.approvals).filter(Boolean).length;
						const daysUntilDue = getDaysUntilDue(component.dueDate);
						
												return (
							<div key={component.id} className={`border rounded-lg p-6 transition-all ${
								component.progress === 100 ? 'bg-green-50 border-green-200' : 
									daysUntilDue < 7 && component.progress < 100 ? 'bg-red-50 border-red-200' :
									'bg-white border-gray-200'
							}`}>
								<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
									{/* Component Info */}
									<div className="lg:col-span-2">
										<div className="flex items-start space-x-3 mb-4">
											<Icon className={`mt-1 ${component.progress === 100 ? 'text-green-600' : 'text-gray-500'}`} size={24} />
											<div className="flex-1">
												<div className="flex items-center space-x-2 mb-2">
													<h3 className="font-semibold text-gray-800 text-lg">{component.title}</h3>
													<span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(component.status)}`}>
														{component.status.replace('-', ' ')}
													</span>
													<span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
														{component.category}
													</span>
												</div>
												<p className="text-gray-600 mb-3">{component.description}</p>
												
												{/* Progress Bar */}
												<div className="mb-3">
													<div className="flex justify-between items-center mb-1">
														<span className="text-sm text-gray-600">Progress</span>
														<span className="text-sm font-medium">{component.progress}%</span>
													</div>
													<div className="w-full bg-gray-200 rounded-full h-2">
														<div
															className={`h-2 rounded-full transition-all duration-300 ${
																component.progress < 30 ? 'bg-red-500' :
																component.progress < 70 ? 'bg-yellow-500' : 'bg-green-500'
															}`}
															style={{ width: `${component.progress}%` }}
														/>
													</div>
												</div>

												{/* Progress Slider */}
												<div className="mb-3">
													<label className="text-sm text-gray-600 block mb-1">Update Progress:</label>
													<input
														type="range"
														min="0"
														max="100"
														step="10"
														value={component.progress}
														onChange={(e) => updateProgress(component.id, parseInt(e.target.value))}
														className="w-full"
													/>
												</div>

												{/* Due Date */}
												<div className="flex items-center space-x-4 text-sm">
													<span className={`${daysUntilDue < 7 && component.progress < 100 ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
														Due: {component.dueDate} 
														({daysUntilDue >= 0 ? `${daysUntilDue} days left` : `${Math.abs(daysUntilDue)} days overdue`})
													</span>
													<span className="text-gray-500">|</span>
													<span className="text-gray-600">
														Approvals: {approvalCount}/3
													</span>
												</div>
											</div>
									</div>

									{/* Notes Section */}
									<div className="mt-4">
										<label className="text-sm text-gray-600 block mb-1">Progress Notes:</label>
										<textarea
											value={component.notes}
											onChange={(e) => updateNotes(component.id, e.target.value)}
											placeholder="Add notes about current status, blockers, next steps..."
											className="w-full p-2 border border-gray-300 rounded-md text-sm resize-none"
											rows="2"
										/>
									</div>
								</div>
								
								{/* Approval Section */}
								<div className="bg-gray-50 p-4 rounded-lg">
									<h4 className="font-medium text-gray-800 mb-3">Approvals Required</h4>
									<div className="space-y-2">
										{['me', 'pi', 'vp'].map(approver => (
											<button
												key={approver}
												onClick={() => toggleApproval(component.id, approver)}
												className={`w-full px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${
													component.approvals[approver]
														? 'bg-green-100 text-green-800 border-green-300'
														: 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
												}`}
											>
												{approver === 'me' ? 'Me' : approver === 'pi' ? 'Principal Investigator' : 'VP Research'}
												{component.approvals[approver] && ' ✓'}
											</button>
										))}
									</div>
								</div>
														</div>
						</div>
						);
						})}
				</div>

				{/* Quick Stats */}
				<div className="mt-8 bg-gray-100 rounded-lg p-6">
					<h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">{components.length}</div>
							<div className="text-sm text-gray-600">Total Components</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">{Math.round((components.filter(c => c.progress === 100).length / components.length) * 100)}%</div>
							<div className="text-sm text-gray-600">Completion Rate</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-yellow-600">{components.filter(c => getDaysUntilDue(c.dueDate) < 7 && c.progress < 100).length}</div>
							<div className="text-sm text-gray-600">Urgent Items</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-purple-600">{components.reduce((sum, c) => sum + Object.values(c.approvals).filter(Boolean).length, 0)}</div>
							<div className="text-sm text-gray-600">Total Approvals</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-indigo-600">{Math.round(components.reduce((sum, c) => sum + c.progress, 0) / components.length)}%</div>
							<div className="text-sm text-gray-600">Avg Progress</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NSFTracker;